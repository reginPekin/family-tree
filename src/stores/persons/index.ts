import { createStore } from "effector";

import type { Person } from "../../api/persons";
import { Parents, Person as PersonClass } from "../../classes";

import { getPersonsFx, getMeFx, addPersonFx } from "./effects";
import { updateHashTableParents } from "../parents/events";
import {
  updatePersonParents,
  addPersonToHashTable,
  addHashTablePersons,
} from "../persons/events";
import { parentsHashTable } from "../parents";
import { tree as treeStore } from "../tree";
import { setTreeFx } from "../tree/events";

export interface PersonsType {
  [id: number]: Person;
}

export interface HashTablePersons {
  [id: number]: PersonClass;
}

export const persons = createStore<PersonsType>({});

persons.on(getPersonsFx.doneData, (state, persons: Person[]) => {
  persons.forEach((person) => {
    if (!state[person.id]) {
      state[person.id] = person;
    }
  });
  console.log(state, "STATE");
  return state;
});

export const personsHashTable = createStore<HashTablePersons>({});

personsHashTable.on(addPersonFx.doneData, (state, { person, child }: any) =>
  // { person: Person; child: PersonClass }
  {
    let newPersonParents: Parents | undefined;
    let tree: PersonClass | undefined;

    parentsHashTable.watch((watchedParents) => {
      newPersonParents = watchedParents[person.id];
    });

    treeStore.watch((watchedTree) => {
      tree = watchedTree;
    });

    const newPerson = new PersonClass({
      ...person,
      parents: newPersonParents || { id: 0, mother: null, father: null },
    });

    if (child) {
      updateHashTableParents({ parentsId: child.parents, newPerson });
    }

    state[person.id] = newPerson;

    if (!tree?.id) {
      setTreeFx(newPerson);
    }

    treeStore.watch((watchedTree) => {
      console.log(watchedTree, "WATCHED TREE addPersonFx");
    });

    return state;
  }
);

personsHashTable.on(addHashTablePersons, (state, person: PersonClass) => {
  state[person.id] = person;

  return state;
});

personsHashTable.on(
  updatePersonParents,
  (
    state,
    {
      childId,
      mother,
      father,
    }: { childId: number; mother: PersonClass; father: PersonClass }
  ) => {
    state[childId].parents.father = father;
    state[childId].parents.mother = mother;

    treeStore.watch((watchedTree) => {
      console.log(watchedTree, "WATCHED TREE updatePersonParents");
    });

    return state;
  }
);

personsHashTable.on(
  addPersonToHashTable,
  (
    state,
    {
      child,
      mother,
      father,
    }: { child: PersonClass; mother: Person; father: Person }
  ) => {
    let motherParents: Parents | undefined;
    let fatherParents: Parents | undefined;

    parentsHashTable.watch((watchedParents) => {
      motherParents = watchedParents[mother.id];
      fatherParents = watchedParents[father.id];
    });

    if (motherParents && fatherParents) {
      const motherClass = new PersonClass({
        ...mother,
        parents: motherParents,
      });

      const fatherClass = new PersonClass({
        ...father,
        parents: fatherParents,
      });

      state[mother.id] = motherClass;
      state[father.id] = fatherClass;

      updatePersonParents({
        childId: child.id,
        mother: motherClass,
        father: fatherClass,
      });

      return state;
    }

    return state;
  }
);

export const me = createStore<Person>({
  name: "",
  gender: "female",
  id: 0,
  parents: 0,
});

me.on(getMeFx.doneData, (_, me: Person) => {
  return me;
});

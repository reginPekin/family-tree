import { createStore } from "effector";

import type { Person } from "../../api/persons";
import { Parents, Person as PersonClass } from "../../classes";

import { getPersonsFx, getMeFx, addPersonFx, addParentsFx } from "./effects";
import { updateHashTableParents } from "../parents/events";
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
  console.log(state, "hash state");
  return state;
});

export const personsHashTable = createStore<HashTablePersons>({});

personsHashTable.on(addPersonFx.doneData, (state, { person, child }: any) =>
  // { person: Person; child: PersonClass }
  {
    console.log("personsHashTable addPersonFx -->");
    console.log(person, "PERSON");
    console.log(child, "CHILD");

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

    console.log(state, "NEW STATE");

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

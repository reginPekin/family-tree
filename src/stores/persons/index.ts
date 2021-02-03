import { createStore } from "effector";

import type { PersonType } from "../../utils";

import type { Person } from "../../api/persons";

import { getPersonsFx, getMeFx, addPersonFx, addParentsFx } from "./effects";
import { setTreeFx } from "./events";

export interface PersonsType {
  [id: number]: Person;
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

// persons.on(addPersonFx.doneData, (personsState, person: Person) => [
//   ...personsState,
//   person,
// ]);

// persons.on(
//   addParentsFx.doneData,
//   (personsState, parents: { mother: Person; father: Person }) => [
//     ...personsState,
//     parents.mother,
//     parents.father,
//   ]
// );

export const me = createStore<Person>({
  name: "",
  gender: "female",
  id: 0,
  parents: 0,
});

me.on(getMeFx.doneData, (_, me: Person) => {
  return me;
});

export const tree = createStore<PersonType>({
  name: "",
  gender: "female",
  id: 0,
  parents: { mother: null, father: null, id: 0 },
});

tree.on(setTreeFx, (_, tree) => {
  return tree;
});

tree.on(addPersonFx.doneData, (treeState, person: Person) => {
  // treeState[person.id] = person;
  console.log(person, "add person to the tree");
  

  if()
  return treeState;

 
});

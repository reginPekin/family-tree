import { createStore } from "effector";

import type { Parents, Person } from "../../api";
import { getPersonsFx, getMeFx, addPersonFx, addParentsFx } from "./effects";
import { parents } from "../parents";
// import { addPersonFx } from "./events";

export const persons = createStore<Person[]>([]);

persons.on(getPersonsFx.doneData, (personsState, persons: Person[]) => [
  ...personsState,
  ...persons,
]);
persons.on(addPersonFx.doneData, (personsState, person: Person) => [
  ...personsState,
  person,
]);
persons.on(
  addParentsFx.doneData,
  (personsState, parents: { mother: Person; father: Person }) => [
    ...personsState,
    parents.mother,
    parents.father,
  ]
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

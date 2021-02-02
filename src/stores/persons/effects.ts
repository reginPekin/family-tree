import { createEffect } from "effector";

import {
  getPersons,
  getMe,
  Person,
  createNewPerson,
  updateParents,
} from "../../api";

export const getPersonsFx = createEffect<void, Person[]>(getPersons);
export const getMeFx = createEffect<void, Person>(getMe);
export const addPersonFx = createEffect<Omit<Person, "id" | "parents">, Person>(
  createNewPerson
);

export const addParentsFx = createEffect<
  {
    childName: string;
    parentsId: number;
  },
  { mother: Person; father: Person }
>(updateParents);

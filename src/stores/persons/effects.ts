import { createEffect } from "effector";

import { getPersons, getMe, Person, createNewPerson } from "../../api/persons";
import { updateParents } from "../../api/parents";

export const getPersonsFx = createEffect<void, Person[]>(getPersons);
export const getMeFx = createEffect<void, Person>(getMe);
export const addPersonFx = createEffect<
  {
    data: Omit<Person, "id" | "parents">;
    childId: number;
  },
  { person: Person; childId: number }
>(createNewPerson);

export const addParentsFx = createEffect<
  {
    childName: string;
    parentsId: number;
  },
  { mother: Person; father: Person }
>(updateParents);

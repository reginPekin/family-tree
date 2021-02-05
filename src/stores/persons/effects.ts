import { createEffect } from "effector";

import type { Person as PersonClass } from "../../classes";

import { getPersons, getMe, Person, createNewPerson } from "../../api/persons";
import { updateParents } from "../../api/parents";

export const getPersonsFx = createEffect<void, Person[]>(getPersons);
export const getMeFx = createEffect<void, Person>(getMe);
export const addPersonFx = createEffect<
  {
    data: Omit<Person, "id" | "parents">;
    child?: PersonClass;
  },
  { person: Person; child?: PersonClass }
>(createNewPerson);

export const addParentsFx = createEffect<
  {
    child: PersonClass;
  },
  // { mother: Person; father: Person }
  any
>(updateParents);

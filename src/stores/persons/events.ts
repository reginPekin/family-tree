import { createEvent } from "effector";

import type { Person } from "../../api/persons";

import type { Person as PersonClass } from "../../classes";

interface UpdatedParents {
  childId: number;
  mother: PersonClass;
  father: PersonClass;
}

interface ParentsInPersonHash {
  child: PersonClass;
  mother: Person;
  father: Person;
}

export const addHashTablePersons = createEvent<PersonClass>();
export const updatePersonParents = createEvent<UpdatedParents>();
export const addPersonToHashTable = createEvent<ParentsInPersonHash>();

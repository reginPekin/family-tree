import type { ParentsType as ParentsStoreTypes } from "../stores/parents";
import type { PersonsType as PersonStoreTypes } from "../stores/persons";

import { Parents, Person } from "../classes";

export interface ParentsType {
  mother: PersonType | null;
  father: PersonType | null;
  id: number;
}

export interface PersonType {
  id: number;
  parents: ParentsType;
  gender: "male" | "female";
  name: string;
}

export function getParents(
  parentsId: number,
  personStore: PersonStoreTypes,
  parentsStore: ParentsStoreTypes
): ParentsType {
  const parents = parentsStore[parentsId];

  if (!parents.mother && !parents.father) {
    const parentsClass = new Parents({
      id: parents.id,
      mother: null,
      father: null,
    });

    return parentsClass;
  }

  const mother = parents.mother
    ? getPerson(parents.mother, personStore, parentsStore)
    : null;

  const father = parents.father
    ? getPerson(parents.father, personStore, parentsStore)
    : null;

  const parentsClass = new Parents({ id: parents.id, mother, father });

  return parentsClass;
}

export function getPerson(
  personId: number,
  personStore: PersonStoreTypes,
  parentsStore: ParentsStoreTypes
): PersonType {
  const person = personStore[personId];

  const parents = getParents(person.id, personStore, parentsStore);
  const personClass = new Person({
    id: person.id,
    gender: person.gender,
    name: person.name,
    parents,
  });
  return personClass;
}

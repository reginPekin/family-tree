import { createStore } from "effector";

import type { Parents } from "../../api/parents";
import type { Parents as ParentsClass } from "../../classes";

import { getAllParentsFx } from "./effects";
import { addHashTableParent, updateHashTableParents } from "./events";

export interface ParentsType {
  [id: number]: Parents;
}

export interface HashTableParents {
  [id: number]: ParentsClass;
}

export const parents = createStore<ParentsType>({});

parents.on(getAllParentsFx.doneData, (state, parents: Parents[]) => {
  parents.forEach((parent) => {
    if (!state[parent.id]) {
      state[parent.id] = parent;
    }
  });

  return state;
});

export const parentsHashTable = createStore<HashTableParents>({});

parentsHashTable.on(addHashTableParent, (state, parents: ParentsClass) => {
  state[parents.id] = parents;

  return state;
});

parentsHashTable.on(
  updateHashTableParents,
  (state, { parentsId, newPerson }: any) => {
    console.log(newPerson, "NEW PERSON");
    if (newPerson.gender === "male") {
      state[parentsId].father = newPerson;
    } else {
      state[parentsId].mother = newPerson;
    }

    return state;
  }
);

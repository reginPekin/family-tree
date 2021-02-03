import { createStore } from "effector";

import type { Parents } from "../../api/parents";
import { getAllParentsFx } from "./effects";

export interface ParentsType {
  [id: number]: Parents;
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

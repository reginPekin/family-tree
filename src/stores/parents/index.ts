import { createStore } from "effector";

import type { Parents } from "../../api";
import { getParentsFx } from "./effects";

export const parents = createStore<Parents[]>([]);

parents.on(getParentsFx.doneData, (parentsState, parents: Parents[]) => {
  return [...parentsState, ...parents];
});

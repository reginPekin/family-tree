import { createStore } from "effector";

import type { PersonType } from "../../utils";

import { setTreeFx } from "./events";

export const tree = createStore<PersonType>({
  name: "",
  gender: "female",
  id: 0,
  parents: { mother: null, father: null, id: 0 },
});

tree.on(setTreeFx, (state, payload: PersonType) => {
  return payload;
});

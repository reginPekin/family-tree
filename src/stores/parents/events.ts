import { createEvent } from "effector";

import type { Parents } from "../../classes";

export const addHashTableParent = createEvent<Parents>();
export const updateHashTableParents = createEvent<any>();

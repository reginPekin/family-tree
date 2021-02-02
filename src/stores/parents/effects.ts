import { createEffect } from "effector";

import { getParents, Parents } from "../../api";

export const getParentsFx = createEffect<void, Parents[]>(getParents);

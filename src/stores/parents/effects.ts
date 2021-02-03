import { createEffect } from "effector";

import { getAllParents, Parents } from "../../api/parents";

export const getAllParentsFx = createEffect<void, Parents[]>(getAllParents);

import { createEvent } from "effector";

import type { Person } from "../../classes";

export const addHashTablePersons = createEvent<Person>();

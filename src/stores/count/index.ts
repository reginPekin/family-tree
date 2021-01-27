import { createEvent, createStore } from "effector";

export const incCount = createEvent();
export const decCount = createEvent();

export const countStore = createStore(0);
export const anotherCountStore = countStore.map((state) => state * 10);

countStore.on(incCount, (state) => state + 1);
countStore.on(decCount, (state) => state - 1);

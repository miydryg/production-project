import { createSelector } from "@reduxjs/toolkit";
import { getCounter } from "../getCounter/getCounter";
import { CounterSchema } from "../../types/CounterTypes";

export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value,
);

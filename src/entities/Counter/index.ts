import { Counter } from "./ui/Counter";
import { CounterSchema } from "./model/type/counterSchema";
import { counterReducer } from "./model/slice/CounterSlice";

export {
    Counter,
    counterReducer
}

export type {
    CounterSchema
}
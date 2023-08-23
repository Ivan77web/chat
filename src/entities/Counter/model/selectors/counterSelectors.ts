import { StateSchema } from "@/app/providers/store/config/stateSchema";

export const getCounterValue = (state: StateSchema) => state.counter.value;
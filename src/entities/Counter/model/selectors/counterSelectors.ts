import { StateSchema } from "@/app/providers/store/config/StateSchema";

export const getCounterValue = (state: StateSchema) => state.counter.data.value;
export const getCounterIsLoading = (state: StateSchema) => state.counter.isLoading;
export const getCounterError = (state: StateSchema) => state.counter?.error || '';
import { StateSchema } from "@/app/providers/store/config/StateSchema";

export const getCounterValue = (state: StateSchema) => state?.counter?.data?.value || 0;
export const getCounterIsLoading = (state: StateSchema) => state?.counter?.isLoading || false;
export const getCounterError = (state: StateSchema) => state.counter?.error || '';
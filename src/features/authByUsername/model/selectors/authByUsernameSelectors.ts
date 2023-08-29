import { StateSchema } from "@/app/providers/store/config/StateSchema";

export const getAuthDataUsername = (state: StateSchema) => state.authData?.username || '';
export const getAuthDataPassword = (state: StateSchema) => state.authData?.password || '';
export const getAuthDataIsLoading = (state: StateSchema) => state.authData?.isLoading || false;
export const getAuthDataError = (state: StateSchema) => state.authData?.error || '';
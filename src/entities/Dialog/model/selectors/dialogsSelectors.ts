import { StateSchema } from "@/app/providers/store/config/StateSchema";

export const getDialogsIsLoading = (state: StateSchema) => state.dialogs.isLoading;
export const getDialogsError = (state: StateSchema) => state.dialogs?.error || '';
export const getDialogsData = (state: StateSchema) => state.dialogs?.dialogs || [];
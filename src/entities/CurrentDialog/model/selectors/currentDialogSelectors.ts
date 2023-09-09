import { StateSchema } from "@/app/providers/store/config/StateSchema";

export const getCurrentDialogId = (state: StateSchema) => state.currentDialog.data?.id;
export const getCurrentDialogDialog = (state: StateSchema) => state.currentDialog.data?.dialog;
export const getCurrentDialogUsers = (state: StateSchema) => state.currentDialog.data?.users;
export const getCurrentDialogIsLoading = (state: StateSchema) => state.currentDialog.isLoading;
export const getCurrentDialogError = (state: StateSchema) => state.currentDialog.error;

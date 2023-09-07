import { StateSchema } from "@/app/providers/store/config/StateSchema";

export const getCurrentDialogId = (state: StateSchema) => state.currentDialog.id;
import { StateSchema } from "@/app/providers/store/config/StateSchema"

export const getUserId = (state: StateSchema) => state.user.authData?.id;
export const getUserUsername = (state: StateSchema) => state.user.authData?.username;
export const getUserAuthData = (state: StateSchema) => state.user.authData;
export const getUserInited = (state: StateSchema) => state.user._inited;
export const getUserDialogsId = (state: StateSchema) => state.user.authData?.dialogs || [];
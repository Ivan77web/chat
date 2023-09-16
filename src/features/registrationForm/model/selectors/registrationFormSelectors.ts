import { StateSchema } from "@/app/providers/store/config/StateSchema";

export const getRegistrationFormUsername = (state: StateSchema) => state.registrationForm?.data.username || '';
export const getRegistrationFormPassword = (state: StateSchema) => state.registrationForm?.data.password || '';
export const getRegistrationFormRepeatPassword = (state: StateSchema) => state.registrationForm?.data.repeatPassword || '';
export const getRegistrationFormAvatar = (state: StateSchema) => state.registrationForm?.data.avatar || '';
export const getRegistrationFormIsLoading = (state: StateSchema) => state.registrationForm?.isLoading || true;
export const getRegistrationFormError = (state: StateSchema) => state.registrationForm?.error || '';
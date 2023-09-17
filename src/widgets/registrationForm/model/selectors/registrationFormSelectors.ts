import { StateSchema } from "@/app/providers/store/config/StateSchema";

export const getRegistrationFormUsername = (state: StateSchema) => state.registrationForm?.data.username || '';
export const getRegistrationFormPassword = (state: StateSchema) => state.registrationForm?.data.password || '';
export const getRegistrationFormRepeatPassword = (state: StateSchema) => state.registrationForm?.data.repeatPassword || '';
export const getRegistrationFormAvatar = (state: StateSchema) => state.registrationForm?.data.avatar || '';
export const getRegistrationFormIsLoading = (state: StateSchema) => state.registrationForm?.isLoading || false;
export const getRegistrationFormError = (state: StateSchema) => state.registrationForm?.error || '';
export const getRegistrationFormIsSuccess = (state: StateSchema) => state.registrationForm?.isSuccess || false;

export const getRegistrationFormStatusAvatar = (state: StateSchema) => state.registrationForm?.data.statusAvatar;
export const getRegistrationFormAllStatusUsername = (state: StateSchema) => state.registrationForm?.data.allStatusUsername;
export const getRegistrationFormStatusUsernameText = (state: StateSchema) => state.registrationForm?.data.statusUsernameText;
export const getRegistrationFormStatusUsername = (state: StateSchema) => state.registrationForm?.data.statusUsername;
export const getRegistrationFormStatusUsernameShort = (state: StateSchema) => state.registrationForm?.data.statusUsernameShort;
export const getRegistrationFormAllStatusPassword = (state: StateSchema) => state.registrationForm?.data.allStatusPassword;
export const getRegistrationFormStatusPasswordText = (state: StateSchema) => state.registrationForm?.data.statusPasswordText;
export const getRegistrationFormStatusPassword = (state: StateSchema) => state.registrationForm?.data.statusPassword;
export const getRegistrationFormStatusPasswordShort = (state: StateSchema) => state.registrationForm?.data.statusPasswordShort;
export const getRegistrationFormStatusPasswordNumbers = (state: StateSchema) => state.registrationForm?.data.statusPasswordNumbers;
export const getRegistrationFormStatusPasswordUppercase = (state: StateSchema) => state.registrationForm?.data.statusPasswordUppercase;
export const getRegistrationFormStatusPasswordSpecialSymbol = (state: StateSchema) => state.registrationForm?.data.statusPasswordSpecialSymbol;
export const getRegistrationFormAllStatusRepeatPassword = (state: StateSchema) => state.registrationForm?.data.allStatusRepeatPassword;
export const getRegistrationFormStatusRepeatPasswordText = (state: StateSchema) => state.registrationForm?.data.statusRepeatPasswordText;
export const getRegistrationFormStatusRepeatPassword = (state: StateSchema) => state.registrationForm?.data.statusRepeatPassword;
export const getRegistrationFormStatusRepeatPasswordNotMatch = (state: StateSchema) => state.registrationForm?.data.statusRepeatPasswordNotMatch;
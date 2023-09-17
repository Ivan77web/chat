import { StatusFormItem } from "@/shared/types/statusFormItem";

interface RegistrationForm {
    username?: string;
    password?: string;
    repeatPassword?: string;
    avatar?: string;
    statusAvatar: StatusFormItem
    allStatusUsername: StatusFormItem
    statusUsernameText: string
    statusUsername: StatusFormItem
    statusUsernameShort: StatusFormItem
    allStatusPassword: StatusFormItem
    statusPasswordText: string
    statusPassword: StatusFormItem
    statusPasswordShort: StatusFormItem
    statusPasswordNumbers: StatusFormItem
    statusPasswordUppercase: StatusFormItem
    statusPasswordSpecialSymbol: StatusFormItem
    allStatusRepeatPassword: StatusFormItem
    statusRepeatPasswordText: string
    statusRepeatPassword: StatusFormItem
    statusRepeatPasswordNotMatch: StatusFormItem
}

export interface RegistrationFormSchema {
    error?: string;
    isLoading: boolean;
    data: RegistrationForm;
    isSuccess: boolean;
}
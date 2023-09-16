interface RegistrationForm {
    username?: string;
    password?: string;
    repeatPassword?: string;
    avatar?: string;
}

export interface RegistrationFormSchema {
    error?: string;
    isLoading: boolean;
    data: RegistrationForm
}
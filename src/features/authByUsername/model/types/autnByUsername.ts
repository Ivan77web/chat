export interface AuthByUsernameSchema {
    username: string;
    password: string;
    isLoading: boolean;
    error?: string;
}
export interface User {
    id: string;
    username: string;
    password: string;
    dialogs?: string[];
}

export interface UserSchema {
    authData?: User;
    _inited: boolean;
}
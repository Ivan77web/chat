import { User } from "@/entities/User";

export interface FindUsers {
    users?: User[];
    filterUsers?: User[];
}

export interface FindUsersSchema {
    isLoading: boolean;
    error?: string,
    data: FindUsers;
    
}
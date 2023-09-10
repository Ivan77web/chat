import { User } from "@/entities/User";

export interface Message {
    autorId: string;
    message: string;
    date: string;
    time: string;
}

export interface Dialog {
    id: string;
    participants: User[];
    messages: Message[];
}

export interface DialogsSchema {
    dialogs?: Dialog[],
    filteredDialogs?: Dialog[],
    error?: string,
    isLoading: boolean
}
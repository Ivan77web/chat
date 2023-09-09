export interface Message {
    autorId: string;
    message: string;
    date: string;
    time: string;
}

export interface Dialog {
    id: string;
    participants: string[];
    messages: Message[];
}

export interface DialogsSchema {
    dialogs?: Dialog[],
    error?: string,
    isLoading: boolean
}
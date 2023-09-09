import { Dialog } from "@/entities/Dialog";
import { User } from "@/entities/User";

export interface CurrentDialog {
    id: string | null;
    dialog?: Dialog
    users?: User[]
}

export interface CurrentDialogSchema {
    data: CurrentDialog;
    isLoading: boolean;
    error?: string;
}
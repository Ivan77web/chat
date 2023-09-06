import { getDialogs } from "./model/services/getDialogs";
import { dialogsReducer } from "./model/slice/DialogsSlice";
import { DialogsSchema } from "./model/types/dialogSchema";

export type {
    DialogsSchema
}

export {
    dialogsReducer,
    getDialogs
}
import {
    getDialogsIsLoading,
    getDialogsError,
    getDialogsData,
} from "./model/selectors/dialogsSelectors";
import { getDialogs } from "./model/services/getDialogs";
import { dialogsReducer } from "./model/slice/DialogsSlice";
import { DialogsSchema } from "./model/types/dialogSchema";
import { Dialog } from "./model/types/dialogSchema";


export type {
    DialogsSchema,
    Dialog
}

export {
    dialogsReducer,
    getDialogs,
    getDialogsIsLoading,
    getDialogsError,
    getDialogsData,
}
import {
    getDialogsIsLoading,
    getDialogsError,
    getDialogsData,
} from "./model/selectors/dialogsSelectors";
import { getDialogs } from "./model/services/getDialogs";
import { dialogsReducer } from "./model/slice/DialogsSlice";
import { DialogsSchema } from "./model/types/dialogSchema";
import { Dialog } from "./model/types/dialogSchema";
import { Message } from "./model/types/dialogSchema";
import { dialogsActions } from "./model/slice/DialogsSlice";
import { getFilteredDialogsData } from "./model/selectors/dialogsSelectors";

export type {
    DialogsSchema,
    Dialog,
    Message
}

export {
    dialogsReducer,
    getDialogs,
    getDialogsIsLoading,
    getDialogsError,
    getDialogsData,
    dialogsActions,
    getFilteredDialogsData
}
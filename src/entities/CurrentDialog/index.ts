import { CurrentDialogSchema } from "./model/types/CurrentDialogSchema";
import { currentDialogsReducer } from "./model/slice/CurrentDialogSlice";
import { currentDialogsActions } from "./model/slice/CurrentDialogSlice";
import { getCurrentDialogId } from "./model/selectors/currentDialogSelectors";

export {
    currentDialogsReducer,
    currentDialogsActions,
    getCurrentDialogId
}

export type {
    CurrentDialogSchema
}
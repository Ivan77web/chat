import { CurrentDialogSchema } from "./model/types/CurrentDialogSchema";
import { currentDialogsReducer } from "./model/slice/CurrentDialogSlice";
import { currentDialogsActions } from "./model/slice/CurrentDialogSlice";
import { getCurrentDialogId } from "./model/selectors/currentDialogSelectors";
import { getDataForCurrentDialog } from "./model/services/getDataForCurrentDialog";

export {
    currentDialogsReducer,
    currentDialogsActions,
    getCurrentDialogId,
    getDataForCurrentDialog
}

export type {
    CurrentDialogSchema
}
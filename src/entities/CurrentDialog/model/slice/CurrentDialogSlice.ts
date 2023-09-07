import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CurrentDialogSchema } from "../types/CurrentDialogSchema";

const initialState: CurrentDialogSchema = {
    id: null,
}

export const currentDialogsSlice = createSlice({
    name: 'currentDialog',
    initialState,
    reducers: {
        setId: (state, action: PayloadAction<string | null>) => {
            if (action.payload === null) {
                state.id = null;
            } else {
                state.id = action.payload;
            }
        }
    },
})

export const { actions: currentDialogsActions } = currentDialogsSlice;
export const { reducer: currentDialogsReducer } = currentDialogsSlice;
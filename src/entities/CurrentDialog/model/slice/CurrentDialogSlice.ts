import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CurrentDialogSchema } from "../types/CurrentDialogSchema";
import { getDataForCurrentDialog } from "../services/getDataForCurrentDialog";

const initialState: CurrentDialogSchema = {
    isLoading: false,
    data: null
}

export const currentDialogsSlice = createSlice({
    name: 'currentDialog',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getDataForCurrentDialog.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
                state.data = null;
            })
            .addCase(getDataForCurrentDialog.fulfilled, (state, action) => {
                state.error = undefined;
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(getDataForCurrentDialog.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
                state.data = null;
            });
    },
})

export const { actions: currentDialogsActions } = currentDialogsSlice;
export const { reducer: currentDialogsReducer } = currentDialogsSlice;
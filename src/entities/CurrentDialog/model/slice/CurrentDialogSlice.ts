import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CurrentDialogSchema } from "../types/CurrentDialogSchema";
import { getDataForCurrentDialog } from "../services/getDataForCurrentDialog";
import { Dialog } from "@/entities/Dialog";

const initialState: CurrentDialogSchema = {
    isLoading: false,
    data: {
        id: null,
        dialog: undefined,
    },
}

export const currentDialogsSlice = createSlice({
    name: 'currentDialog',
    initialState,
    reducers: {
        setDialog: (state, action: PayloadAction<Dialog>) => {
            state.data.dialog = action.payload;
        },
        resetDialog: (state) => {
            state.data.dialog = undefined;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getDataForCurrentDialog.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(getDataForCurrentDialog.fulfilled, (state, action) => {
                state.error = undefined;
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(getDataForCurrentDialog.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
})

export const { actions: currentDialogsActions } = currentDialogsSlice;
export const { reducer: currentDialogsReducer } = currentDialogsSlice;
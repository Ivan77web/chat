import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Dialog, DialogsSchema } from '../types/dialogSchema';
import { getDialogs } from '../services/getDialogs';

const initialState: DialogsSchema = {
    dialogs: [],
    isLoading: false,
    filteredDialogs: [],
}

export const dialogsSlice = createSlice({
    name: 'dialogs',
    initialState,
    reducers: {
        searchDialog: (state, action: PayloadAction<string>) => {
            if (action.payload.length !== 0) {
                const dialogs: Dialog[] = [];

                state.dialogs?.map(dialog => {
                    if (
                        dialog.participants[0].username.toLowerCase().includes(action.payload.toLowerCase())
                        ||
                        dialog.participants[1].username.toLowerCase().includes(action.payload.toLowerCase())
                    ) {
                        dialogs.push(dialog);
                    }
                })

                state.filteredDialogs = dialogs;
            } else {
                state.filteredDialogs = state.dialogs
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getDialogs.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
                state.dialogs = [];
                state.filteredDialogs = [];
            })
            .addCase(getDialogs.fulfilled, (state, action) => {
                state.error = undefined;
                state.isLoading = false;
                state.dialogs = action.payload;
                state.filteredDialogs = action.payload;
            })
            .addCase(getDialogs.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
                state.dialogs = [];
                state.filteredDialogs = [];
            });
    },
})

export const { actions: dialogsActions } = dialogsSlice;
export const { reducer: dialogsReducer } = dialogsSlice;
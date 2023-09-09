import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { DialogsSchema } from '../types/dialogSchema';
import { getDialogs } from '../services/getDialogs';

const initialState: DialogsSchema = {
    dialogs: [],
    isLoading: false,
}

export const dialogsSlice = createSlice({
    name: 'dialogs',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getDialogs.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
                state.dialogs = [];
            })
            .addCase(getDialogs.fulfilled, (state, action) => {
                state.error = undefined;
                state.isLoading = false;
                state.dialogs = action.payload;
            })
            .addCase(getDialogs.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
                state.dialogs = [];
            });
    },
})

export const { actions: dialogsActions } = dialogsSlice;
export const { reducer: dialogsReducer } = dialogsSlice;
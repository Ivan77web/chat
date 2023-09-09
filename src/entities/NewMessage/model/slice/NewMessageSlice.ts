import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NewMessageSchema } from "../types/NewMessageSchema";

const initialState: NewMessageSchema = {
    message: '',
}

export const newMessageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        setMessage: (state, action: PayloadAction<string>) => {
            state.message = action.payload;
        },
        resetMessage: (state) => {
            state.message = ''
        }
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(getDialogs.pending, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //             state.dialogs = [];
    //         })
    //         .addCase(getDialogs.fulfilled, (state, action) => {
    //             state.error = undefined;
    //             state.isLoading = false;
    //             state.dialogs = action.payload;
    //         })
    //         .addCase(getDialogs.rejected, (state, action) => {
    //             state.error = action.payload;
    //             state.isLoading = false;
    //             state.dialogs = [];
    //         });
    // },
})

export const { actions: newMessageActions } = newMessageSlice;
export const { reducer: newMessageReducer } = newMessageSlice;
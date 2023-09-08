import { ThunkConfig } from "@/app/providers/store/config/StateSchema";
import { currentDialogsActions } from "@/entities/CurrentDialog";
import { Dialog } from "@/entities/Dialog";
import { getUserId } from "@/entities/User";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface SendNewMessageProps {
    mes: string;
    autorID: string;
    date: string;
    time: string;
    currentDialogId: string;
}

export const sendNewMessage = createAsyncThunk<Dialog, SendNewMessageProps, ThunkConfig<string>>(
    'newMessage/sendNewMessage',
    async (props, thunkApi) => {
        const { rejectWithValue, dispatch } = thunkApi;

        try {
            const response = await thunkApi.extra.api.post('/sendMessage', props);

            if (!response.data) throw new Error();

            dispatch(currentDialogsActions.setDialog(response.data));

            return response.data
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);

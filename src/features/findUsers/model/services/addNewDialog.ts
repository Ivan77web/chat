import { ThunkConfig } from "@/app/providers/store/config/StateSchema";
import { Dialog, dialogsActions } from "@/entities/Dialog";
import { User } from "@/entities/User";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface AddNewDialogProps {
    myUser: User;
    guest: User;
}

export const addNewDialog = createAsyncThunk<Dialog, AddNewDialogProps, ThunkConfig<string>>(
    'findUsers/addNewDialog',
    async (data, thunkApi) => {
        const { extra, rejectWithValue, dispatch } = thunkApi;

        try {
            const response = await extra.api.post('/addDialog', data);

            if (!response.data) throw new Error();

            dispatch(dialogsActions.addDialog(response.data))
            dispatch(dialogsActions.setFindUser(''));
            return response.data
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);

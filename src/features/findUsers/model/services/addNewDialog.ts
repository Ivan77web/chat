import { ThunkConfig } from "@/app/providers/store/config/StateSchema";
import { User } from "@/entities/User";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface AddNewDialogProps {
    myUser: User;
    guest: User;
}

export const addNewDialog = createAsyncThunk<string, AddNewDialogProps, ThunkConfig<string>>(
    'findUsers/addNewDialog',
    async (data, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.post('/addDialog', data);
            
            if (!response.data) throw new Error();
            
            return response.data
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);

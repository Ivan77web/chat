import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store/config/StateSchema';
import { Dialog } from '../types/dialogSchema';

export const getDialogs = createAsyncThunk<Dialog[], string[], ThunkConfig<string>>(
    'dialog/getDialog',
    async (ids, thunkApi) => {
        const { rejectWithValue, dispatch } = thunkApi;

        try {
            const response = await thunkApi.extra.api.post('/getDialog', ids);

            if (!response.data) throw new Error();

            console.log(response.data);
            
            return response.data
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);

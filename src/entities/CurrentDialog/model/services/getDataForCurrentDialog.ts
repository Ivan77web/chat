import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store/config/StateSchema';
import { CurrentDialog } from '../types/CurrentDialogSchema';
import { Dialog } from '@/entities/Dialog';

export interface getDataForCurrentDialogProps {
    idDialog: string
}

export const getDataForCurrentDialog = createAsyncThunk<CurrentDialog, getDataForCurrentDialogProps, ThunkConfig<string>>(
    'dialog/getDataForCurrentDialog',
    async (idDialog, thunkApi) => {
        const { rejectWithValue, extra } = thunkApi;

        try {
            const response = await extra.api.post('/getDataForCurrentDialog', idDialog);

            if (!response.data) throw new Error();

            return response.data
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);

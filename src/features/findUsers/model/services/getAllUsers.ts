import { ThunkConfig } from "@/app/providers/store/config/StateSchema";
import { User } from "@/entities/User";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllUsers = createAsyncThunk<User[], void, ThunkConfig<string>>(
    'findUsers/getAllUsers',
    async (_, thunkApi) => {
        const { rejectWithValue } = thunkApi;

        try {
            const response = await thunkApi.extra.api.get('/users');

            if (!response.data) throw new Error();

            return response.data
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);

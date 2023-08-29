import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../types/userSchema';
import { ThunkConfig } from '@/app/providers/store/config/StateSchema';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { userActions } from '../slice/UserSlice';

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
    'user/initAuthData',
    async (_, thunkApi) => {
        const { rejectWithValue, dispatch } = thunkApi;

        const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

        if (!userId) {
            return rejectWithValue('');
        }

        try {
            const response = await thunkApi.extra.api.post('/findUser', {userId});

            if (!response.data) throw new Error();

            dispatch(userActions.setAuthData(response.data));

            return response.data

        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);

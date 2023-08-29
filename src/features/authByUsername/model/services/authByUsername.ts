import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "@/app/providers/store/config/StateSchema";
import { User } from "@/entities/User/model/types/userSchema";
import { userActions } from "@/entities/User";

interface authByUsername {
    username: string;
    password: string;
}

export const authByUsername = createAsyncThunk<User, authByUsername, ThunkConfig<string>>(
    'authData/authByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.post('/login', authData);

            if (!response.data) throw new Error();

            thunkAPI.dispatch(userActions.setAuthData(response.data));

            return response.data
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('Error');
        }
    }
)
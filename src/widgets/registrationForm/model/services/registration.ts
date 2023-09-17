import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "@/app/providers/store/config/StateSchema";
import { User } from "@/entities/User/model/types/userSchema";

interface RegistrationProps {
    avatar: string,
    username: string,
    password: string,
}

export const registration = createAsyncThunk<string, RegistrationProps, ThunkConfig<string>>(
    'registrationForm/registration',
    async (regData, thunkAPI) => {
        const { extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.post('/registration', regData);

            if (!response.data) throw new Error();
            
            return response.data
        } catch (e: any) {
            return thunkAPI.rejectWithValue(String(e.response.status));
        }
    }
)
import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "@/app/providers/store/config/StateSchema";
import { User } from "@/entities/User/model/types/userSchema";

interface RegistrationProps {
    avatar: string,
    username: string,
    password: string,
}

export const registration = createAsyncThunk<User, RegistrationProps, ThunkConfig<string>>(
    'registrationForm/registration',
    async (regData, thunkAPI) => {
        const { extra } = thunkAPI;

        try {
            const response = await extra.api.post('/registration', regData);

            if (!response.data) throw new Error();

            return response.data
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('Error');
        }
    }
)
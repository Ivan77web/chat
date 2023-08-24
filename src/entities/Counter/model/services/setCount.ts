import { createAsyncThunk } from "@reduxjs/toolkit"
import { Counter } from "../type/counterSchema"
import { ThunkConfig } from "@/app/providers/store/config/StateSchema";

export const setCount = createAsyncThunk<Counter, number, ThunkConfig<string>>(
    'counter/getCount',
    async (value, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.post('http://localhost:8000/counter', { value: value });

            if (!response.data) throw new Error();

            return response.data
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('Error');
        }
    }
)
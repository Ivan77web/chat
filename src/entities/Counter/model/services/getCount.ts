import { createAsyncThunk } from "@reduxjs/toolkit"
import { Counter, CounterSchema } from "../type/counterSchema"
import axios from "axios"
import { ThunkConfig } from "@/app/providers/store/config/StateSchema";

export const getCount = createAsyncThunk<Counter, void, ThunkConfig<string>>(
    'counter/getCount',
    async (_, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get('/counter');

            if (!response.data) throw new Error();

            return response.data
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('Error');
        }
    }
)
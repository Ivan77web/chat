import { createAsyncThunk } from "@reduxjs/toolkit"
import { Counter, CounterSchema } from "../type/counterSchema"
import axios from "axios"

export const getCount = createAsyncThunk<Counter, void, { rejectValue: string }>(
    'counter/getCount',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('http://localhost:8000/counter', {
                headers: {
                    Authorization: 'qwqwqw'
                }
            });

            if (!response.data) throw new Error();

            return response.data
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('Error');
        }
    }
)
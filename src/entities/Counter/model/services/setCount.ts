import { createAsyncThunk } from "@reduxjs/toolkit"
import { Counter, CounterSchema } from "../type/counterSchema"
import axios from "axios"

// interface setCountProps {
//     value: number;
// }

export const setCount = createAsyncThunk<Counter, number, { rejectValue: string }>(
    'counter/getCount',
    async (value, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:8000/counter', { value: value }, {
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
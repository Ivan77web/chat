import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { CounterSchema } from '../type/counterSchema'
import { getCount } from '../services/getCount'
import { setCount } from '../services/setCount'

const initialState: CounterSchema = {
    isLoading: false,
    error: undefined,
    data: {
        value: 0,
    }
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.data.value += 1
        },
        decrement: (state) => {
            state.data.value -= 1
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCount.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(getCount.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = undefined;
                state.data = action.payload;
            })
            .addCase(getCount.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    },
})

export const { actions: counterActions } = counterSlice;
export const { reducer: counterReducer } = counterSlice;
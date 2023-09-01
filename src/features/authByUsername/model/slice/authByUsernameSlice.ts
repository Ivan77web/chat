import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AuthByUsernameSchema } from '../types/autnByUsername';
import { authByUsername } from '../services/authByUsername';

const initialState: AuthByUsernameSchema = {
    username: '',
    password: '',
    isLoading: false,
    isSuccess: false,
    error: '',
}

export const authByUsernameSlice = createSlice({
    name: 'authByUsername',
    initialState,
    reducers: {
        setLogin: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(authByUsername.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
                state.isSuccess = false;
            })
            .addCase(authByUsername.fulfilled, (state) => {
                state.isLoading = false;
                state.isSuccess = true;
            })
            .addCase(authByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                state.isSuccess = false;
            });
    },
})

export const { actions: authByUsernameActions } = authByUsernameSlice;
export const { reducer: authByUsernameReducer } = authByUsernameSlice;
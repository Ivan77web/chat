import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AuthByUsernameSchema } from '../types/autnByUsername';
import { authByUsername } from '../services/authByUsername';

const initialState: AuthByUsernameSchema = {
    username: '',
    password: '',
    isLoading: false,
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
            })
            .addCase(authByUsername.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(authByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
})

export const { actions: authByUsernameActions } = authByUsernameSlice;
export const { reducer: authByUsernameReducer } = authByUsernameSlice;
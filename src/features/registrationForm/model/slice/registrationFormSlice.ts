import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RegistrationFormSchema } from '../types/registrationFormSchema';

const initialState: RegistrationFormSchema = {
    isLoading: false,
    data: {}
}

export const registrationFormSlice = createSlice({
    name: 'registrationForm',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.data.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.data.password = action.payload;
        },
        setRepeatPassword: (state, action: PayloadAction<string>) => {
            state.data.repeatPassword = action.payload;
        },
        setAvatar: (state, action: PayloadAction<string>) => {
            state.data.avatar = action.payload;
        }
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(authByUsername.pending, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //             state.isSuccess = false;
    //         })
    //         .addCase(authByUsername.fulfilled, (state) => {
    //             state.isLoading = false;
    //             state.isSuccess = true;
    //         })
    //         .addCase(authByUsername.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //             state.isSuccess = false;
    //         });
    // },
})

export const { actions: registrationFormActions } = registrationFormSlice;
export const { reducer: registrationFormReducer } = registrationFormSlice;
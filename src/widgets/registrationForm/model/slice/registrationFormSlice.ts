import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RegistrationFormSchema } from '../types/registrationFormSchema';
import { StatusFormItem } from '@/shared/types/statusFormItem';
import { registration } from '../services/registration';

const initialState: RegistrationFormSchema = {
    isLoading: false,
    isSuccess: false,
    data: {
        statusAvatar: 'default',
        allStatusUsername: 'default',
        statusUsernameText: '',
        statusUsername: 'default',
        statusUsernameShort: 'default',
        allStatusPassword: 'default',
        statusPasswordText: '',
        statusPassword: 'default',
        statusPasswordShort: 'default',
        statusPasswordNumbers: 'default',
        statusPasswordUppercase: 'default',
        statusPasswordSpecialSymbol: 'default',
        allStatusRepeatPassword: 'default',
        statusRepeatPasswordText: '',
        statusRepeatPassword: 'default',
        statusRepeatPasswordNotMatch: 'default',
    }
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
        },
        setStatusAvatar: (state, action: PayloadAction<StatusFormItem>) => {
            state.data.statusAvatar = action.payload;
        },
        setAllStatusUsername: (state, action: PayloadAction<StatusFormItem>) => {
            state.data.allStatusUsername = action.payload;
        },
        setStatusUsernameText: (state, action: PayloadAction<string>) => {
            state.data.statusUsernameText = action.payload;
        },
        setStatusUsername: (state, action: PayloadAction<StatusFormItem>) => {
            state.data.statusUsername = action.payload;
        },
        setStatusUsernameShort: (state, action: PayloadAction<StatusFormItem>) => {
            state.data.statusUsernameShort = action.payload;
        },
        setAllStatusPassword: (state, action: PayloadAction<StatusFormItem>) => {
            state.data.allStatusPassword = action.payload;
        },
        setStatusPasswordText: (state, action: PayloadAction<string>) => {
            state.data.statusPasswordText = action.payload;
        },
        setStatusPassword: (state, action: PayloadAction<StatusFormItem>) => {
            state.data.statusPassword = action.payload;
        },
        setStatusPasswordShort: (state, action: PayloadAction<StatusFormItem>) => {
            state.data.statusPasswordShort = action.payload;
        },
        setStatusPasswordNumbers: (state, action: PayloadAction<StatusFormItem>) => {
            state.data.statusPasswordNumbers = action.payload;
        },
        setStatusPasswordUppercase: (state, action: PayloadAction<StatusFormItem>) => {
            state.data.statusPasswordUppercase = action.payload;
        },
        setStatusPasswordSpecialSymbol: (state, action: PayloadAction<StatusFormItem>) => {
            state.data.statusPasswordSpecialSymbol = action.payload;
        },
        setAllStatusRepeatPassword: (state, action: PayloadAction<StatusFormItem>) => {
            state.data.allStatusRepeatPassword = action.payload;
        },
        setStatusRepeatPasswordText: (state, action: PayloadAction<string>) => {
            state.data.statusRepeatPasswordText = action.payload;
        },
        setStatusRepeatPassword: (state, action: PayloadAction<StatusFormItem>) => {
            state.data.statusRepeatPassword = action.payload;
        },
        setStatusRepeatPasswordNotMatch: (state, action: PayloadAction<StatusFormItem>) => {
            state.data.statusRepeatPasswordNotMatch = action.payload;
        },
        resetError: (state) => {
            state.error = undefined
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registration.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
                state.isSuccess = false;
            })
            .addCase(registration.fulfilled, (state) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.data = {
                    statusAvatar: 'default',
                    allStatusUsername: 'default',
                    statusUsernameText: '',
                    statusUsername: 'default',
                    statusUsernameShort: 'default',
                    allStatusPassword: 'default',
                    statusPasswordText: '',
                    statusPassword: 'default',
                    statusPasswordShort: 'default',
                    statusPasswordNumbers: 'default',
                    statusPasswordUppercase: 'default',
                    statusPasswordSpecialSymbol: 'default',
                    allStatusRepeatPassword: 'default',
                    statusRepeatPasswordText: '',
                    statusRepeatPassword: 'default',
                    statusRepeatPasswordNotMatch: 'default',
                }
            })
            .addCase(registration.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.error = action.payload;
            });
    },
})

export const { actions: registrationFormActions } = registrationFormSlice;
export const { reducer: registrationFormReducer } = registrationFormSlice;
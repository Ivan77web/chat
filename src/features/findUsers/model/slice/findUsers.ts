import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { FindUsersSchema } from '../types/findUsersSchema';
import { getAllUsers } from '../services/getAllUsers';
import { User } from '@/entities/User';

const initialState: FindUsersSchema = {
    isLoading: true,
    data: {}
}

export const findUsersSlice = createSlice({
    name: 'findUsers',
    initialState,
    reducers: {
        setFilterUsers: (state, action: PayloadAction<User[]>) => {
            state.data.filterUsers = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllUsers.pending, (state) => {
                state.isLoading = true;
                state.error = '';
            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = '';
                state.data.users = action.payload;
            })
            .addCase(getAllUsers.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
})

export const { actions: findUsersSliceActions } = findUsersSlice;
export const { reducer: findUsersSliceReducer } = findUsersSlice;
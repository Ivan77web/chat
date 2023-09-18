import { StateSchema } from "@/app/providers/store/config/StateSchema";

export const getFindUsersAllUsers = (state: StateSchema) => state.findUsers?.data.users || [];
export const getFindFilterUsers = (state: StateSchema) => state.findUsers?.data.filterUsers;
export const getFindUsersIsLoading = (state: StateSchema) => state.findUsers?.isLoading;
export const getFindUsersError = (state: StateSchema) => state.findUsers?.error || '';
import { UserSchema } from "./model/types/userSchema";
import { userReducer } from "./model/slice/UserSlice";
import { getUserInited } from "./model/selectors/userSelectors";

export type {
    UserSchema,
}

export {
    userReducer,
    getUserInited
}
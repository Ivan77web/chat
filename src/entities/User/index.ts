import { UserSchema } from "./model/types/userSchema";
import { userReducer } from "./model/slice/UserSlice";
import { getUserInited } from "./model/selectors/userSelectors";
import { userActions } from "./model/slice/UserSlice";
import { getUserAvatar } from "./model/selectors/userSelectors";
import { User } from "./model/types/userSchema";

export type {
    UserSchema,
    User
}

export {
    userReducer,
    getUserInited,
    userActions,
    getUserAvatar,
}
import { CurrentDialogSchema } from "@/entities/CurrentDialog";
import { DialogsSchema } from "@/entities/Dialog";
import { NewMessageSchema } from "@/entities/NewMessage";
import { UserSchema } from "@/entities/User";
import { AuthByUsernameSchema } from "@/features/authByUsername";
import { FindUsersSchema } from "@/features/findUsers";
import { RegistrationFormSchema } from "@/widgets/registrationForm";
import { AnyAction, CombinedState, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { AxiosInstance } from "axios";

export interface StateSchema {
    user: UserSchema,
    dialogs: DialogsSchema,
    currentDialog: CurrentDialogSchema,
    newMessage: NewMessageSchema,
    
    findUsers?: FindUsersSchema,
    authData?: AuthByUsernameSchema,
    registrationForm?: RegistrationFormSchema,
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxWithManager extends ToolkitStore<StateSchema> {
    reducerManager: ReducerManager
}

interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg
}


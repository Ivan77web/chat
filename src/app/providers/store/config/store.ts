import { configureStore } from '@reduxjs/toolkit'
import { StateSchema } from './StateSchema';
import { counterReducer } from '@/entities/Counter';

export const createReduxStore = (initialState?: StateSchema) => {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer,
        },
        devTools: true,
        preloadedState: initialState,
    })
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
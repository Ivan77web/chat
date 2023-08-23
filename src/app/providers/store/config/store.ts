import { configureStore } from '@reduxjs/toolkit'
import { StateSchema } from './stateSchema';
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
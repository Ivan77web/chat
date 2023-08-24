import { ReactNode, useEffect } from "react"
import { useStore } from "react-redux";
import { Reducer } from "@reduxjs/toolkit";
import { ReduxWithManager, StateSchemaKey } from "@/app/providers/store/config/StateSchema";

interface DynamicModuleLoaderProps {
    children: ReactNode;
    reducers: ReducersList;
}

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
    const {
        children,
        reducers
    } = props;

    const store = useStore() as ReduxWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.dispatch({ type: `@INIT ${name} reducer` });
            store.reducerManager.add(name as StateSchemaKey, reducer);
        })

        return () => {
            Object.entries(reducers).forEach(([name, reducer]) => {
                store.dispatch({ type: `@REMOVE ${name} reducer` });
                store.reducerManager.remove(name as StateSchemaKey);
            })
        }
    }, [])

    return (
        <>
            {children}
        </>
    )
}
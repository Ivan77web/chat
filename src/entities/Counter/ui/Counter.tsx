import { useDispatch, useSelector, useStore } from "react-redux"
import { getCounterError, getCounterIsLoading, getCounterValue } from "../model/selectors/counterSelectors"
import { useCallback, useEffect } from "react";
import { getCount } from "../model/services/getCount";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { setCount } from "../model/services/setCount";
import { ReduxWithManager } from "@/app/providers/store/config/StateSchema";
import { counterReducer } from "../model/slice/CounterSlice";
import { DynamicModuleLoader, ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export const Counter = () => {
    const count = useSelector(getCounterValue);
    const error = useSelector(getCounterError);
    const isLoading = useSelector(getCounterIsLoading);
    const dispatch = useAppDispatch();

    const decrement = useCallback(() => {
        dispatch(setCount(count - 1));
    }, [count, dispatch])

    const increment = useCallback(() => {
        dispatch(setCount(count + 1));
    }, [count, dispatch])

    const reducers: ReducersList = {
        counter: counterReducer
    }

    useEffect(() => {
        dispatch(getCount());
    }, [])

    if (error) {
        return (
            <h1>{error}</h1>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            {
                isLoading
                    ?
                    (
                        <h1>LOADING</h1>
                    )
                    :
                    (
                        <>
                            <div>{count}</div>
                            <button onClick={() => dispatch(decrement)}>-</button>
                            <button onClick={() => dispatch(increment)}>+</button>
                        </>
                    )
            }
        </DynamicModuleLoader>
    )
}
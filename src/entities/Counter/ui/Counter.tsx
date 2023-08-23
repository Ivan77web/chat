import { useDispatch, useSelector } from "react-redux"
import { getCounterError, getCounterIsLoading, getCounterValue } from "../model/selectors/counterSelectors"
import { useCallback, useEffect } from "react";
import { getCount } from "../model/services/getCount";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { setCount } from "../model/services/setCount";

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

    useEffect(() => {
        dispatch(getCount());
    }, [])

    if (error) {
        return (
            <h1>{error}</h1>
        )
    }

    return (
        <div>
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
        </div >
    )
}
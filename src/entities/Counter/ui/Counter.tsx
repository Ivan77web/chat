import { useDispatch, useSelector } from "react-redux"
import { getCounterValue } from "../model/selectors/counterSelectors"
import { counterActions } from "../model/slice/CounterSlice";

export const Counter = () => {
    const count = useSelector(getCounterValue);
    const dispatch = useDispatch()


    return (
        <div>
            <div>{count}</div>
            <button onClick={() => dispatch(counterActions.decrement())}>-</button>
            <button onClick={() => dispatch(counterActions.increment())}>+</button>
        </div>
    )
}
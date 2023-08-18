import { useState } from "react"
import './App.scss';

export const App = () => {
    const [count, setCount] = useState(0);

    const decrement = () => {
        setCount(count - 1);
    }

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <div className="app">
            Count - {count}
            <button onClick={decrement}>Decrement</button>
            <button onClick={increment}>Increment</button>
        </div>
    )
}
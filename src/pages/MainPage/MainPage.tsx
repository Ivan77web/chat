import { Counter } from "@/entities/Counter"
import { classNames } from "@/shared/lib/classNames/classNames"
import { useEffect } from "react"

const MainPage = () => {
    useEffect(() => {
        const data = fetch('http://localhost:8000/comments')
            .then(response => response.json())
            .then(json => console.log(json))
    }, [])

    return (
        <div className={classNames('', {}, [])}>
            Main page

            <Counter />
        </div>
    )
}

export default MainPage
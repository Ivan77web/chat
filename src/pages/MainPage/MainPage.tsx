import { Counter } from "@/entities/Counter"
import { classNames } from "@/shared/lib/classNames/classNames"

const MainPage = () => {
    return (
        <div className={classNames('', {}, [])}>
            Main page

            <Counter />
        </div>
    )
}

export default MainPage
import { Link } from "react-router-dom"
import cl from './Navbar.module.scss';

export const Navbar = () => {
    return (
        <div className={cl.navbar}>
            <Link to={'/main'}>Main</Link>
            <Link to={'/about'}>About</Link>
        </div>
    )
}
import { Link } from "react-router-dom"
import cl from './Navbar.module.scss';
import { Logout } from "@/features/logout";

export const Navbar = () => {
    return (
        <div className={cl.navbar}>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Logout />
        </div>
    )
}
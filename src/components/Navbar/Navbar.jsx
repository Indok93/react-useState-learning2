import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.scss'

export const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="">Counter</NavLink></li>
                <li><NavLink to="">Message</NavLink></li>
                <li><NavLink to="">To Do List</NavLink></li>
            </ul>
        </nav>
    )
}
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.scss'

export const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="counter">Counter</NavLink></li>
                <li><NavLink to="message">Message</NavLink></li>
                <li><NavLink to="todolist">ToDo List</NavLink></li>
                <li><NavLink to="effects">Effects</NavLink></li>
                <li><NavLink to="stopwatch">Stopwatch</NavLink></li>
                <li><NavLink to="joke">Joke</NavLink></li>
            </ul>
        </nav>
    )
}
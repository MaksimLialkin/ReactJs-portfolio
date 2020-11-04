import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}><NavLink to="/main" activeClassName={classes.active}>Обо мне</NavLink></div>
            <div className={classes.item}><NavLink to="/dialogs" activeClassName={classes.active}>Мой опыт</NavLink></div>
            <div className={classes.item}><a href="#">Мои навыки</a></div>
            <div className={classes.item}><a href="#">Мои работы</a></div>
            <div className={classes.item}><a href="#">Прайс-лист</a></div>
        </nav>
    )
}

export default Navbar
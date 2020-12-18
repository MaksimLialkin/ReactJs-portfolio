import React from 'react';
import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}><NavLink to="/profile" activeClassName={classes.active}>Обо мне</NavLink></div>
            <div className={classes.item}><NavLink to="/dialogs" activeClassName={classes.active}>Сообщения</NavLink></div>
            <div className={classes.item}><NavLink to="/experience">Мой опыт</NavLink></div>
            <div className={classes.item}><NavLink to="/work">Мои работы</NavLink></div>
            <div className={classes.item}><NavLink to="/users" activeClassName={classes.active}>Пользователи</NavLink></div>
        </nav>
    )
}

export default Navbar
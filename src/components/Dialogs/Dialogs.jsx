import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}><NavLink to="/dialogs/1" activeClassName={classes.active}>Максим</NavLink></div>
                <div className={classes.dialog}><NavLink to="/dialogs/2" activeClassName={classes.active}>Мария</NavLink></div>
                <div className={classes.dialog}><NavLink to="/dialogs/3" activeClassName={classes.active}>Игорь</NavLink></div>
                <div className={classes.dialog}><NavLink to="/dialogs/4" activeClassName={classes.active}>Сергей</NavLink></div>
                <div className={classes.dialog}><NavLink to="/dialogs/5" activeClassName={classes.active}>Борис</NavLink></div>
                <div className={classes.dialog}><NavLink to="/dialogs/6" activeClassName={classes.active}>Валерий</NavLink></div>
                <div className={classes.dialog}><NavLink to="/dialogs/7" activeClassName={classes.active}>Ирина</NavLink></div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Привет, как дела?</div>
                <div className={classes.message}>Пошли сегодня в кино</div>
                <div className={classes.message}>Сколько стоит турпутевка?</div>
            </div>
        </div>
    )
}

export default Dialogs
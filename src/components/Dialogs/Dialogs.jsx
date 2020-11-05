import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + " " + classes.active}>Максим</div>
                <div className={classes.dialog}>Мария</div>
                <div className={classes.dialog}>Игорь</div>
                <div className={classes.dialog}>Сергей</div>
                <div className={classes.dialog}>Борис</div>
                <div className={classes.dialog}>Валерий</div>
                <div className={classes.dialog}>Ирина</div>
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
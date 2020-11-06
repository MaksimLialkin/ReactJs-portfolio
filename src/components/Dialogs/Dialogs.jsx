import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css'

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return <div className={classes.dialog}>
        <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
    </div>
};

const Message = (props) => {
    return <div className={classes.message}>{props.text}</div>

}

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name="Максим" id="1" />
                <DialogItem name="Мария" id="2" />
                <DialogItem name="Игорь" id="3" />
                <DialogItem name="Сергей" id="4" />
                <DialogItem name="Борис" id="5" />
                <DialogItem name="Валерий" id="6" />
                <DialogItem name="Ирина" id="7" />
            </div >
            <div className={classes.messages}>
                <Message text="Привет, как дела?" />
                <Message text="Пошли сегодня в кино" />
                <Message text="Сколько стоит турпутевка?" />
            </div>
        </div >
    )
}

export default Dialogs
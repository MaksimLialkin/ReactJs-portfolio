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

    let DialogsData = [
        { id: 1, name: 'Максим' },
        { id: 2, name: 'Мария' },
        { id: 3, name: 'Игорь' },
        { id: 4, name: 'Сергей' },
        { id: 5, name: 'Борис' },
        { id: 6, name: 'Валерий' },
        { id: 7, name: 'Ирина' }
    ]

    let MessagesData = [
        { id: 1, text: 'Привет, как дела?' },
        { id: 2, text: 'Пошли сегодня в кино' },
        { id: 3, text: 'Сколько стоит турпутевка?' },
        { id: 4, text: 'Я посетил 14 стран' },
        { id: 5, text: 'Привет, пойдем сегодня гулять?' },
        { id: 6, text: 'Хорошего дня и настроения' },
        { id: 7, text: 'Приходите сегодня в гости' }
    ]

    let DialogsElements = DialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let MessagesElements = MessagesData.map(messages => <Message text={messages.text} />)


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {DialogsElements}
            </div >
            <div className={classes.messages}>
                {MessagesElements}
            </div>
        </div >
    )
}

export default Dialogs
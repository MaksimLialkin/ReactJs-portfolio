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


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={DialogsData[0].name} id={DialogsData[0].id} />
                <DialogItem name={DialogsData[1].name} id={DialogsData[1].id} />
                <DialogItem name={DialogsData[2].name} id={DialogsData[2].id} />
                <DialogItem name={DialogsData[3].name} id={DialogsData[3].id} />
                <DialogItem name={DialogsData[4].name} id={DialogsData[4].id} />
                <DialogItem name={DialogsData[5].name} id={DialogsData[5].id} />
                <DialogItem name={DialogsData[6].name} id={DialogsData[6].id} />
            </div >
            <div className={classes.messages}>
                <Message text={MessagesData[0].text} />
                <Message text={MessagesData[1].text} />
                <Message text={MessagesData[2].text} />
                <Message text={MessagesData[3].text} />
                <Message text={MessagesData[4].text} />
                <Message text={MessagesData[5].text} />
                <Message text={MessagesData[6].text} />
            </div>
        </div >
    )
}

export default Dialogs
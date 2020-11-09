import React from 'react';
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css'

const Dialogs = (props) => {

    let DialogsElements = props.state.DialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let MessagesElements = props.state.MessagesData.map(messages => <Message text={messages.text} />)


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
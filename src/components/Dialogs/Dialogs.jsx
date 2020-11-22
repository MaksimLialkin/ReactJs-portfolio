import React from 'react';
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'
import classes from './Dialogs.module.css'
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/dialogs-reducer'


const Dialogs = (props) => {

    let DialogsElements = props.dialogsPage.DialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let MessagesElements = props.dialogsPage.MessagesData.map(messages => <Message text={messages.text} />)

    let onSendMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewMessageBodyActionCreator(text))
    }

    return (<div>

        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {DialogsElements}
            </div >
            <div className={classes.messages}>
                <div>{MessagesElements}</div>
                <div>
                    <div>
                        <textarea placeholder='Enter your message' onChange={onPostChange} value={props.dialogsPage.newMessageText} />
                    </div>
                    <div>
                        <button onClick={onSendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div >
    </div>
    )
}

export default Dialogs
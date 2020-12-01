import React from 'react';
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessage = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    let onPostChange = (text) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(text))
    }

    return (
        <Dialogs updateNewMessageBody={onPostChange} addMessage={onSendMessage}
            dialogsPage={state} />
    )
}

export default DialogsContainer
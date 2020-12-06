import React from 'react';
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/dialogs-reducer'
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';


const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            { store => {
                let onSendMessage = () => {
                    store.dispatch(sendMessageActionCreator())
                }

                let onPostChange = (text) => {
                    store.dispatch(updateNewMessageBodyActionCreator(text))
                }
                return <Dialogs updateNewMessageBody={onPostChange}
                    addMessage={onSendMessage}
                    dialogsPage={store.getState().dialogsPage} />
            }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer
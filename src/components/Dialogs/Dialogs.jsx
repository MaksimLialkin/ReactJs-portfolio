import React from 'react';
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'
import classes from './Dialogs.module.css'
import { addNameActionCreator, updateNewPostTextActionCreator } from '../../redux/state'


const Dialogs = (props) => {

    let DialogsElements = props.dialogsPage.DialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let MessagesElements = props.dialogsPage.MessagesData.map(messages => <Message text={messages.text} />)

    let newPostElements = React.createRef();

    let addName = () => {
        // props.addName();
        props.dispatch(addNameActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElements.current.value;
        // props.updateNewPostText(text);
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (<div>
        <div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElements} value={props.dialogsPage.newPostText} />
            </div>
            <div>
                <button onClick={addName}>Put</button>
            </div>
        </div>
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {DialogsElements}
            </div >

            <div className={classes.messages}>
                {MessagesElements}
            </div>
        </div >
    </div>
    )
}

export default Dialogs
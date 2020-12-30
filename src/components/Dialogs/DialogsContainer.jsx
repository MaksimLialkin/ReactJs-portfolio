import React from 'react'
import { connect } from 'react-redux';
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs';

class DialogsContainer extends React.Component {
    render() {
        return <Dialogs
            dialogsPage={this.props.dialogsPage}
            addMessage={this.props.addMessage}
            updateNewMessageBody={this.props.updateNewMessageBody}
            isAuth={this.props.isAuth}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (text) => {
            dispatch(updateNewMessageBodyActionCreator(text))
        },
        addMessage: () => {
            dispatch(sendMessageActionCreator())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DialogsContainer);


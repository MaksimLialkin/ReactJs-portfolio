import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../Hoc/withAuthRedirect';
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs';

class DialogsContainer extends React.Component {
    render() {
        return <Dialogs
            dialogsPage={this.props.dialogsPage}
            addMessage={this.props.addMessage}
            updateNewMessageBody={this.props.updateNewMessageBody}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(DialogsContainer)

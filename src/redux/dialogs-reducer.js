const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY',
    ADD_MESSAGE = 'ADD-MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 8,
                text: state.newMessageText,
            };
            state.MessagesData.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
    // if (action.type === ADD_MESSAGE) {
    //     let newMessage = {
    //         id: 8,
    //         text: state.newMessageText,
    //     };
    //     state.MessagesData.push(newMessage);
    //     state.newMessageText = '';
    // } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    //     state.newMessageText = action.newText;
    // }
    // return state;
}

export const sendMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const updateNewMessageBodyActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, newText: text
    }
}

export default dialogsReducer;
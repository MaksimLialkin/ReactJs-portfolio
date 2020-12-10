const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY',
    ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    DialogsData: [
        { id: 1, name: 'Максим' },
        { id: 2, name: 'Мария' },
        { id: 3, name: 'Игорь' },
        { id: 4, name: 'Сергей' },
        { id: 5, name: 'Борис' },
        { id: 6, name: 'Валерий' },
        { id: 7, name: 'Ирина' }
    ],
    MessagesData: [
        { id: 1, text: 'Привет, как дела?' },
        { id: 2, text: 'Пошли сегодня в кино' },
        { id: 3, text: 'Сколько стоит турпутевка?' },
        { id: 4, text: 'Я посетил 14 стран' },
        { id: 5, text: 'Привет, пойдем сегодня гулять?' },
        { id: 6, text: 'Хорошего дня и настроения' },
        { id: 7, text: 'Приходите сегодня в гости' }
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 8,
                text: state.newMessageText,
            };
            return {
                ...state,
                MessagesData: [...state.MessagesData, newMessage],
                newMessageText: ''
            };
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageText: action.text
            };
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const updateNewMessageBodyActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, text
    }
}

export default dialogsReducer;
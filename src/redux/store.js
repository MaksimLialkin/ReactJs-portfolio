import dialogsReducer from "./dialogs-reducer";

let store = {
    _state:
    {
        dialogsPage: {
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
    },
    _callSubscriber() {
        console.log("Hello")
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;

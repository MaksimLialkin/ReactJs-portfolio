const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY',
    ADD_MESSAGE = 'ADD-MESSAGE';


let store = {
    _state:
    {
        mainPage: {
            TitleData: [
                { name: 'Web-разработка' },
                { name: 'Разработка приложений' },
                { name: 'UI/UX Design' }
            ],
            SkillsData: [
                { text: 'WEB-разработка — процедура создания WEB-приложения или WEB-сайта. Основными этапами этого процесса являются такие мероприятия, как WEB-дизайн, вёрстка страниц сайта, WEB-программирование на стороне сервера и клиента, а также работы по конфигурированию WEB-сервера.' },
                { text: 'это процесс, при котором приложения разрабатываются для небольших портативных устройств, таких, как КПК, смартфоны или сотовые телефоны. Эти приложения могут быть предустановлены на устройство в процессе производства, загружены пользователем с помощью различных платформ для распространения ПО или являться веб-приложениями, которые обрабатываются на стороне клиента (JavaScript) или сервера.' },
                { text: ' UX-дизайн отвечает за функции, адаптивность продукта и то, какие эмоции он вызывает у пользователей. Чем понятнее интерфейс, тем легче пользователю получить результат и совершить целевое действие.' }
            ],
        },
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
        if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 8,
                text: this._state.dialogsPage.newMessageText,
            };
            this._state.dialogsPage.MessagesData.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
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


export default store;
window.store = store;

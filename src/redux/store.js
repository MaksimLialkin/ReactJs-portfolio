import dialogsReducer from "./dialogs-reducer";
import mainReducer from "./main-reducer";

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
        },
        mainPage: {
            skills: [
                {
                    id: 1, title: 'Web-разработка', text: 'Процесс создания веб-сайта или веб-приложения. Основными этапами процесса являются веб-дизайн, вёрстка страниц, программирование на стороне клиента и сервера, а также конфигурирование веб-сервера.'
                },
                {
                    id: 2, title: 'UI/UX Design', text: 'UX-дизайн отвечает за функции, адаптивность продукта и то, какие эмоции он вызывает у пользователей. Чем понятнее интерфейс, тем легче пользователю получить результат и совершить целевое действие.'
                },
                {
                    id: 3, title: 'Разработка приложений', text: 'Разработка приложений для мобильных устройств — это процесс, при котором приложения разрабатываются для небольших портативных устройств, таких, как КПК, смартфоны или сотовые телефоны.'
                }
            ],
            newSkillsText: 'Тестировщик'
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
        this._state.mainPage = mainReducer(this._state.mainPage, action);
        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;

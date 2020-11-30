const ADD_SKILLS = 'ADD-SKILLS',
    UPDATE_NEW_SKILLS_TEXT = 'UPDATE-NEW-SKILLS-TEXT'

let initialState = {
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

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SKILLS:
            let newSkills = {
                id: 4,
                title: state.newSkillsText,
                text: 'любой текст по теме'
            }
            state.skills.push(newSkills);
            state.newSkillsText = '';
            return state;
        case UPDATE_NEW_SKILLS_TEXT:
            state.newSkillsText = action.newText;
            return state;
        default:
            return state;
    }
}

export let addSkillsActionCreator = () => ({ type: ADD_SKILLS });

export let updateNewSkillsTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_SKILLS_TEXT, newText: text
    }
}

export default mainReducer
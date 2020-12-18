const ADD_SKILLS = 'ADD-SKILLS',
    UPDATE_NEW_SKILLS_TEXT = 'UPDATE-NEW-SKILLS-TEXT',
    SET_USER_PROFILE = 'SET_USER_PROFILE'

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
    newSkillsText: 'Тестировщик',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SKILLS: {
            let newSkills = {
                id: 4,
                title: state.newSkillsText,
                text: 'любой текст по теме'
            }
            let stateCopy = { ...state };
            stateCopy.skills = [...state.skills];
            stateCopy.skills.push(newSkills);
            stateCopy.newSkillsText = '';
            return stateCopy;
        }
        case UPDATE_NEW_SKILLS_TEXT: {
            let stateCopy = { ...state };
            stateCopy.newSkillsText = action.newText;
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
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
export let setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export default profileReducer
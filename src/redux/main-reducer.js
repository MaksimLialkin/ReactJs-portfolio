const ADD_SKILLS = 'ADD-SKILLS',
    UPDATE_NEW_SKILLS_TEXT = 'UPDATE-NEW-SKILLS-TEXT'

const mainReducer = (state, action) => {
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
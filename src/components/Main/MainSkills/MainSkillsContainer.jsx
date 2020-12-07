import { connect } from 'react-redux';
import { addSkillsActionCreator, updateNewSkillsTextActionCreator } from '../../../redux/main-reducer'
import MainSkills from './MainSkills';

let mapStateToProps = (state) => {
    return {
        skills: state.mainPage.skills,
        newSkillsText: state.mainPage.newSkillsText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addSkills: () => {
            dispatch(addSkillsActionCreator())
        },
        updateNewSkillsText: (text) => {
            dispatch(updateNewSkillsTextActionCreator(text))
        }
    }
}

const MainSkillsContainer = connect(mapStateToProps, mapDispatchToProps)(MainSkills)

export default MainSkillsContainer;
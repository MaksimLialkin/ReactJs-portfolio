import { addSkillsActionCreator, updateNewSkillsTextActionCreator } from '../../../redux/main-reducer'
import MainSkills from './MainSkills';

const MainSkillsContainer = (props) => {
    let state = props.store.getState();

    let addSkills = () => {
        props.store.dispatch(addSkillsActionCreator())
    }

    let onSkillsChange = (text) => {
        props.store.dispatch(updateNewSkillsTextActionCreator(text));
    }

    return (
        <MainSkills updateNewSkillsText={onSkillsChange} addSkills={addSkills}
            skills={state.mainPage.skills}
            newSkillsText={state.mainPage.newSkillsText} />
    )
}
export default MainSkillsContainer;
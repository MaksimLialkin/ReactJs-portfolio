import { addSkillsActionCreator, updateNewSkillsTextActionCreator } from '../../../redux/main-reducer'
import StoreContext from '../../../StoreContext';
import MainSkills from './MainSkills';

const MainSkillsContainer = () => {
    return (
        <StoreContext.Consumer>
            { store => {
                let state = store.getState();
                let addSkills = () => {
                    store.dispatch(addSkillsActionCreator())
                }

                let onSkillsChange = (text) => {
                    store.dispatch(updateNewSkillsTextActionCreator(text));
                }
                return <MainSkills updateNewSkillsText={onSkillsChange}
                    addSkills={addSkills}
                    skills={state.mainPage.skills}
                    newSkillsText={state.mainPage.newSkillsText} />
            }
            }
        </StoreContext.Consumer>
    )
}
export default MainSkillsContainer;
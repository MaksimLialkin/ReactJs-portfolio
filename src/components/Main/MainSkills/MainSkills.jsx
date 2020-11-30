import classes from '../Main.module.css'
import SkillsPost from './SkillsPost/SkillsPost';
import { addSkillsActionCreator, updateNewSkillsTextActionCreator } from '../../../redux/main-reducer'

const MainSkills = (props) => {

    let SkillsElements = props.skills.map(skills => <SkillsPost id={skills.id} title={skills.title} text={skills.text} />)

    let addSkills = () => {
        props.dispatch(addSkillsActionCreator())
    }

    let onSkillsChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewSkillsTextActionCreator(text));
    }

    return (
        <div>
            <div className={classes.main_skills}>
                {SkillsElements}
            </div>
            <div>
                <textarea onChange={onSkillsChange} value={props.newSkillsText} />
            </div>
            <div>
                <button onClick={addSkills}>Add skills</button>
            </div>
        </div>
    )
}
export default MainSkills;
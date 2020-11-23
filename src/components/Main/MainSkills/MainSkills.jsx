import classes from '../Main.module.css'
import SkillsPost from './SkillsPost/SkillsPost';

const MainSkills = () => {
    return (
        <div>
            <div className={classes.main_skills}>
                <SkillsPost />
            </div>
            <textarea></textarea>
            <button>Add skills</button>
        </div>
    )
}
export default MainSkills;
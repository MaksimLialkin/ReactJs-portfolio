import React from 'react';
import classes from '../Main.module.css'
import SkillsPost from './SkillsPost/SkillsPost';

const MainSkills = (props) => {
    let SkillsElements = props.skills.map(skills => <SkillsPost id={skills.id} title={skills.title} text={skills.text} />)

    let onAddSkills = () => {
        props.addSkills()
    }

    let onSkillsChange = (e) => {
        let text = e.target.value;
        props.updateNewSkillsText(text);
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
                <button className={classes.btn} onClick={onAddSkills}>Add skills</button>
            </div>
        </div>
    )
}
export default MainSkills;
import classes from './../MainSkills.module.css'

const SkillsText = (props) => {
    return (
        <div className={classes.main_skillsText}>{props.text}</div>
    )
}

export default SkillsText
import classes from '../../Profile.module.css'

const SkillsPost = (props) => {
    return (
        <div className={classes.main_skillsPost}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH51HPzXXLgwWh4FH3MjZ_L1akejD5GP6f2w&usqp=CAU" alt="" />
            <div className={`${classes.title} ${classes.title_fz16}`}>{props.title}</div>
            <div className={classes.main_skillsText}>{props.text}</div>
        </div>
    )
}

export default SkillsPost;
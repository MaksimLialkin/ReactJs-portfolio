import classes from '../../Main.module.css'

const SkillsPost = () => {
    return (
        <div className={classes.main_skillsPost}>
            <div className={`${classes.title} ${classes.title_fz16}`}>Web-разработка</div>
            <div className={classes.main_skillsText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
    )
}

export default SkillsPost;
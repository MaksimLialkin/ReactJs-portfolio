import classes from './../MainSkills.module.css'

const TitleItem = (props) => {
    return (
        <div className={`${classes.title} ${classes.title_fz16}`}>{props.name}</div>
    )
}

export default TitleItem
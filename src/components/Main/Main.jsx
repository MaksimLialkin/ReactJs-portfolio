import classes from './Main.module.css'
import MainInfo from './MainInfo/MainInfo';
import MainSkills from './MainSkills/MainSkills'

const Main = (props) => {

    return (
        <div className={classes.main}>
            <div className={classes.main_wrapper}>
                <div className={classes.main_photo}></div>
                <MainInfo />
                <MainSkills skills={props.mainPage.skills}
                    newSkillsText={props.mainPage.newSkillsText}
                    dispatch={props.dispatch}
                />
            </div>
        </div>
    )
}
export default Main;
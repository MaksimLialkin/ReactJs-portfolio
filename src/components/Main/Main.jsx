import classes from './Main.module.css'
import MainInfo from './MainInfo/MainInfo';
import MainSkillsContainer from './MainSkills/MainSkillsContainer';

const Main = (props) => {
    return (
        <div className={classes.main}>
            <div className={classes.main_wrapper}>
                <div className={classes.main_photo}></div>
                <MainInfo />
                <MainSkillsContainer store={props.store} />
            </div>
        </div>
    )
}
export default Main;
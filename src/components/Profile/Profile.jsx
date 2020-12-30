import classes from './Profile.module.css'
import ProfileSkillsContainer from './ProfileSkills/ProfileSkillsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import { Redirect } from 'react-router-dom';

const Profile = (props) => {
    if (!props.isAuth) return <Redirect to={"/login"} />;

    return (
        <div className={classes.main}>
            <div className={classes.main_wrapper}>
                <div className={classes.main_photo}></div>
                <ProfileInfo profile={props.profile} />
                <ProfileSkillsContainer />
            </div>
        </div>
    )
}
export default Profile;
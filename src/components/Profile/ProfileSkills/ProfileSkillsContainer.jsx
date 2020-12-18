import { connect } from 'react-redux';
import { addSkillsActionCreator, updateNewSkillsTextActionCreator } from '../../../redux/profile-reducer'
import ProfileSkills from './ProfileSkills';

let mapStateToProps = (state) => {
    return {
        skills: state.profilePage.skills,
        newSkillsText: state.profilePage.newSkillsText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addSkills: () => {
            dispatch(addSkillsActionCreator())
        },
        updateNewSkillsText: (text) => {
            dispatch(updateNewSkillsTextActionCreator(text))
        }
    }
}

const ProfileSkillsContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileSkills)

export default ProfileSkillsContainer;
import React from 'react'
import { connect } from 'react-redux';
import { addSkillsActionCreator, updateNewSkillsTextActionCreator } from '../../../redux/main-reducer'
import MainSkills from './MainSkills';

class MainSkillsContainer extends React.Component {
    render() {
        return <MainSkills skills={this.props.skills}
            addSkills={this.props.addSkills}
            updateNewSkillsText={this.props.updateNewSkillsText}
            newSkillsText={this.props.newSkillsText}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        skills: state.mainPage.skills,
        newSkillsText: state.mainPage.newSkillsText
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

export default connect(mapStateToProps, mapDispatchToProps)(MainSkillsContainer)

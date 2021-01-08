import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUsersProfile, getUsersStatus, updateUsersStatus } from '../../redux/profile-reducer'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../Hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 13351;
        }
        this.props.getUsersProfile(userId);
        this.props.getUsersStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}
                status={this.props.status}
                updateUsersStatus={this.props.updateUsersStatus} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose(
    connect(mapStateToProps, { getUsersProfile, getUsersStatus, updateUsersStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
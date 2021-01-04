import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUsersProfile } from '../../redux/profile-reducer'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../Hoc/withAuthRedirect';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUsersProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let authRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

let WithUrlDataContainerComponent = withRouter(authRedirectComponent)

export default connect(mapStateToProps, { getUsersProfile })(WithUrlDataContainerComponent);
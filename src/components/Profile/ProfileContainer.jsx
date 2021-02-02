import Profile from "./Profile";
import * as React from "react";
import {connect} from "react-redux";
import {
    getUserProfile,
    getUserStatus,
    updateUserPhoto,
    updateUserProfile,
    updateUserStatus
} from "../../redux/profilesReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    refresh() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    componentDidMount() {
        this.refresh()
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refresh()
        }
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     isOwner={!this.props.match.params.userId}
            />
        );
    };
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    };
};

export default compose(
    connect(mapStateToProps, {
        getUserProfile, getUserStatus,
        updateUserStatus, updateUserPhoto,
        updateUserProfile
    }),
    withRouter,
)(ProfileContainer);
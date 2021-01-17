import Profile from "./Profile";
import * as React from "react";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profilesReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    };

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    };
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    };
};

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
let WithUrlDataProfileContainer = withRouter(AuthRedirectComponent);
export default connect(mapStateToProps, {getUserProfile})(WithUrlDataProfileContainer);
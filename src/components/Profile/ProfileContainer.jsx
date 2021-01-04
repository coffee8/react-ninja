import Profile from "./Profile";
import * as React from "react";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profilesReducer";
import {withRouter} from "react-router-dom";
import {userAPI} from "../../api/api";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2;
        }
        userAPI.getProfile(userId).then(data => {
            this.props.setUserProfile(data)
        })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

let WithUrlDataProfileContainer = withRouter(ProfileContainer);
export default connect(mapStateToProps, {setUserProfile})(WithUrlDataProfileContainer)
import Users from "./Users";
import {connect} from "react-redux";
import * as React from "react";
import {onFollowActionCreator, setUsersActionCreator} from "../../redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onFollow: (userId) => {
            dispatch(onFollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer

import Users from "./Users";
import {connect} from "react-redux";
import * as React from "react";
import {
    onFollowActionCreator,
    setCurrentPageActionCreator,
    setTotalUsersActionCreator,
    setUsersActionCreator
} from "../../redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onFollow: (userId) => {
            dispatch(onFollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageActionCreator(pageNumber))
        },
        setTotalUsers: (totalCount) => {
            dispatch(setTotalUsersActionCreator(totalCount))
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer

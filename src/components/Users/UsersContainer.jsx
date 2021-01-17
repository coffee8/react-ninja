import Users from './Users';
import {connect} from 'react-redux';
import * as React from 'react';
import {
    followProfile,
    getUsers,
    onFollow,
    setCurrentPage,
    toggleFollowingInProgress,
    unfollowProfile
} from '../../redux/usersReducer';
import Preloader from '../../assets/preloader/Preloader';
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(this.props.pageSize, pageNumber);
        this.props.setCurrentPage(pageNumber);
    }

    render() {
        return (
            <div>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       followed={this.props.followed}
                       onPageChanged={this.onPageChanged}
                       followingInProgress={this.props.followingInProgress}
                       unfollowProfile={this.props.unfollowProfile}
                       followProfile={this.props.followProfile}
                />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    };
};
// let mapDispatchToProps = (dispatch) => {
//     return {
//         onFollow: (userId) => {
//             dispatch(onFollowActionCreator(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersActionCreator(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageActionCreator(pageNumber))
//         },
//         setTotalUsers: (totalCount) => {
//             dispatch(setTotalUsersActionCreator(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingActionCreator(isFetching))
//         }
//     }
// }

export default compose(
    connect(mapStateToProps, {
        onFollow, setCurrentPage,
        toggleFollowingInProgress, getUsers,
        unfollowProfile, followProfile
    }),
    withAuthRedirect
)(UsersContainer);

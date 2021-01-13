import Users from './Users';
import {connect} from 'react-redux'
import * as React from 'react'
import {
    onFollow,
    setCurrentPage,
    setTotalUsers,
    setUsers,
    toggleFollowingInProgress,
    toggleIsFetching
} from '../../redux/usersReducer'
import Preloader from '../../assets/preloader/Preloader'
import {userAPI} from '../../api/api'

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        userAPI.getUsers(this.props.pageSize, this.props.currentPage).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsers(data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        userAPI.getUsers(this.props.pageSize, pageNumber).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        })
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
                       onFollow={this.props.onFollow}
                       toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                       followingInProgress={this.props.followingInProgress}
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
    }
}
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

export default connect(mapStateToProps,
    {onFollow, setUsers, setCurrentPage, setTotalUsers, toggleIsFetching, toggleFollowingInProgress})(UsersContainer);

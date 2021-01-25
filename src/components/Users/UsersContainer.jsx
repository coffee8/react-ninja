import Users from './Users';
import {connect} from 'react-redux';
import * as React from 'react';
import {
    followProfile,
    requestUsers,
    onFollow,
    setCurrentPage,
    toggleFollowingInProgress,
    unfollowProfile,
} from '../../redux/usersReducer';
import Preloader from '../../assets/preloader/Preloader';
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/usersSelectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.pageSize, this.props.currentPage);
    }

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(this.props.pageSize, pageNumber);
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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    };
};

export default compose(
    connect(mapStateToProps, {
        onFollow, setCurrentPage,
        toggleFollowingInProgress, requestUsers,
        unfollowProfile, followProfile
    }),
)(UsersContainer);

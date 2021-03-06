import {userAPI} from '../api/api';

const TOGGLE_FOLLOW = `TOGGLE_FOLLOW`;
const SET_USERS = `SET_USERS`;
const SET_CURRENT_PAGE = `SET_CURRENT_PAGE`;
const SET_TOTAL_COUNT = `SET_TOTAL_COUNT`;
const TOGGLE_IS_FETCHING = `TOGGLE_IS_FETCHING`;
const TOGGLE_IS_FOLLOWING_PROGRESS = `TOGGLE_IS_FOLLOWING_PROGRESS`;

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: !u.followed}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const onFollow = (userId) => ({type: TOGGLE_FOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsers = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingInProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});

export const requestUsers = (pageSize, currentPage) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let data = await userAPI.getUsers(pageSize, currentPage)
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsers(data.totalCount));
};

const followUnfollowFlow = async (dispatch, userId, apiMethod) => {
    dispatch(toggleFollowingInProgress(true, userId));
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(onFollow(userId));
    }
    dispatch(toggleFollowingInProgress(false, userId));
}

export const unfollowProfile = (userId) => {
    return async (dispatch) => {
        let apiMethod = userAPI.unfollowProfile.bind(userAPI);
        await followUnfollowFlow(dispatch, userId, apiMethod);
    };
};

export const followProfile = (userId) => {
    return async (dispatch) => {
        let apiMethod = userAPI.followProfile.bind(userAPI);
        await followUnfollowFlow(dispatch, userId, apiMethod);
    };
};

export default usersReducer;
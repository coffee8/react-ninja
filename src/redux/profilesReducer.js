import {profileAPI, userAPI} from "../api/api";

const ADD_POST = `ADD-POST`;
const UPDATE_NEW_POST_TEXT = `UPDATE-NEW-POST-TEXT`;
const SET_USER_PROFILE = `SET_USER_PROFILE`;
const SET_STATUS = `SET_STATUS`;

const initialState = {
    postData: [
        {id: 1, message: 'Hi, how are you?', likeCount: 0},
        {id: 2, message: 'Gooooood', likeCount: 21}
    ],
    newPostText: 'Напиши что-нибудь :)',
    profile: null,
    status: '========='
};

const profilesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ``
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
};

export const addPost = () => ({type: ADD_POST})
export const updateNewPostText = (newText) => ({type: UPDATE_NEW_POST_TEXT, newText: newText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status: status});


export const getUserProfile = (userId) => {
    return (dispatch) => {
        userAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        });
    };
};

export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    });
};

export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
};


export default profilesReducer;
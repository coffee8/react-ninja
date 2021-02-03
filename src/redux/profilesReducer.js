import {profileAPI, userAPI} from "../api/api";

const ADD_POST = `ADD-POST`;
const SET_USER_PROFILE = `SET_USER_PROFILE`;
const SET_STATUS = `SET_STATUS`;
const SET_PHOTO = `SET_PHOTO`;

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
                message: action.newPostText,
                likeCount: 0
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ``
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
        case SET_PHOTO:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        default:
            return state;
    }
};

export const addPost = (newPostText) => ({type: ADD_POST, newPostText: newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status: status});
export const setPhoto = (photos) => ({type: SET_PHOTO, photos});

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await userAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
};

export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
};

export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};

export const updateUserPhoto = (file) => async (dispatch) => {
    let response = await profileAPI.updatePhoto (file)
    if (response.data.resultCode === 0) {
        dispatch(setPhoto(response.data.data.photos));
    }
};

export const updateUserProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.updateProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } /*else if (response.data.resultCode === 1) {
        return Promise.reject(response.messages)
    }*/
};

export default profilesReducer;
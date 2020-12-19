const ADD_POST = `ADD-POST`
const UPDATE_NEW_POST_TEXT = `UPDATE-NEW-POST-TEXT`

const initialState = {
    postData:
        [{message: 'Hi, how are you?', likeCount: 0},
            {message: 'Gooooood', likeCount: 21}],
    newPostText: 'Напиши что-нибудь :)'
}

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
            return  {
                ...state,
                newPostText: action.newText
            }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (newText) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText
})

export default profilesReducer
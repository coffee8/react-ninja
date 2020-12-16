const ADD_POST = `ADD-POST`
const UPDATE_NEW_POST_TEXT = `UPDATE-NEW-POST-TEXT`

const profilesReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            }
            state.postData.push(newPost)
            state.newPostText = ''
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            break;
        default:
            return state
    }
    return state
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (newText) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText
})

export default profilesReducer
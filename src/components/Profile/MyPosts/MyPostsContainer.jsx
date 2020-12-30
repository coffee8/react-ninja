import * as React from 'react'
import {
    addPost,
    updateNewPostText
} from '../../../redux/profilesReducer'
import MyPosts from './MyPosts';
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return {
        postElements: state.profilePage,
        newPostText: state.profilePage.newPostText
    }
}
//
// let mapDispatchToProps = (dispatch) => {
//     return {
//         addPost: () => {
//             dispatch(addPostActionCreator())
//         },
//         onPostChange: (text) => {
//             dispatch(updateNewPostTextActionCreator(text))
//         }
//     }
// }

const MyPostsContainer = connect(mapStateToProps, {addPost, updateNewPostText})(MyPosts);

export default MyPostsContainer
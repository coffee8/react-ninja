import * as React from 'react'
import {addPost} from '../../../redux/profilesReducer'
import MyPosts from './MyPosts';
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return {
        postElements: state.profilePage,
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts);

export default MyPostsContainer
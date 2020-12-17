import * as React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profilesReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState()

    // let postsElements = props
    //     .postElements
    //     .postData
    //     .map(p => <div><Post message={p.message} likeCount={p.likeCount}/></div>);

    //let newPostElement = React.createRef()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text) => {
        //let text = newPostElement.current.value
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }


    return (
        <MyPosts onPostChange={onPostChange}
                 postElements={state.profilePage}
                 addPost={addPost}
                 newPostText={state.profilePage.newPostText}/>
    )

}

export default MyPostsContainer
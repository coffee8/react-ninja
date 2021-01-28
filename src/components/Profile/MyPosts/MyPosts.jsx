import p from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react';
import AddPostReduxForm from "./AddPostForm";

const MyPosts = React.memo(props => {

    let postsElements = props
        .postElements
        .postData
        .map(p => <div><Post message={p.message} likeCount={p.likeCount}/></div>);

    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div>
            <div className={p.margin}>
                my posts
            </div>
            <div className={p.margin}>
                <div>
                    <AddPostReduxForm onSubmit={addNewPost}/>
                </div>
            </div>
            <div className={`${p.posts} ${p.margin}`}>
                {postsElements}
            </div>
        </div>
    )
});

export default MyPosts;
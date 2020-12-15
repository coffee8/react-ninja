import p from './MyPosts.module.css'
import Post from './Post/Post'
import * as React from "react";

const MyPosts = (props) => {
    let postsElements = props
        .postElements
        .postData
        .map(p => <div><Post message={p.message} likeCount={p.likeCount}/></div>);

    let newPostElement = React.createRef()

    let addPost = () => {
        //props.addPost()
        let action = {
            type: `ADD-POST`
        }
        props.dispatch(action)
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        //props.updateNewPostText(text)
        let action = {
            type: `UPDATE-NEW-POST-TEXT`,
            newText: text
        }
        debugger
        props.dispatch(action)
    }

    return (
        <div>
            <div className={p.margin}>
                my posts
            </div>
            <div className={p.margin}>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={`${p.posts} ${p.margin}`}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
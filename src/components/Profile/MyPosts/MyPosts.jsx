import p from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div>
            <div className={p.margin}>
                my posts
            </div>
            <div className={p.margin}>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={`${p.posts} ${p.margin}`}>
                <Post message='Hi, how are you?' likeCount='0'/>
            </div>
            <div className={`${p.posts} ${p.margin}`}>
                <Post message='Thanks, what about you?' likeCount='12'/>
            </div>
        </div>

    )
}

export default MyPosts;
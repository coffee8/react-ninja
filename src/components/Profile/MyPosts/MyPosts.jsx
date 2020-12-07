import p from './MyPosts.module.css'
import Post from './Post/Post'
import Likes from './Post/Likes'
const MyPosts = () => {
    return (
        <div>
            my posts
            <div>
                <textarea></textarea>
                <button>Add post </button>
                <button>Remove  </button>
            </div>
            <div className={p.posts}>
                <Post message='Hi, how are you?'/>
                <Likes likeCount='20'/>
                <Post message='Thanks, what about you?'/>
                <Likes likeCount='15'/>
            </div>
        </div>

    )
}

export default MyPosts;
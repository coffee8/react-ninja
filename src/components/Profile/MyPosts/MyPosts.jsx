import p from './MyPosts.module.css'
import Post from './Post/Post'
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
                <Post message='Hi, how are you?' likeCount='0'/>
                <Post message='Thanks, what about you?' likeCount='12'/>
            </div>
        </div>

    )
}

export default MyPosts;
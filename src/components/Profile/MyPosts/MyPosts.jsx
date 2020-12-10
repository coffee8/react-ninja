import p from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {

    let postData = [{message: 'Hi, how are you?', likeCount: 0},
        {message: 'Gooooood', likeCount: 21}]

    let postsElements = postData.map( p => <div><Post message={p.message} likeCount={p.likeCount}/></div>)

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
                { postsElements }
            </div>
        </div>

    )
}

export default MyPosts;
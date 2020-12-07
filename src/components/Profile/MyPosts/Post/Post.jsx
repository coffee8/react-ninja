import p from './Post.module.css'

const Post = (props) => {
    return (
        <div className={p.item}>
            <img src='https://i.pinimg.com/originals/39/df/f1/39dff1a149ce821c91c31a9a7ff29914.jpg'></img>
            {props.message}
            <div>
            <span>{props.likes}</span>
            </div>
        </div>

    )
}

export default Post;
import p from './Post.module.css'
const Likes = (props) => {
    return (
        <div className={p.item}>
            {props.likeCount}
        </div>
    )

}

export default Likes
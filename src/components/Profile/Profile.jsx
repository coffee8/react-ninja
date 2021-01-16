import p from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    alert(props.isAuth)
    return (
        <div className={p.content}>
            <div>
                <ProfileInfo profile={props.profile}/>
            </div>
            <div>
                <MyPostsContainer/>
            </div>
        </div>
    )
}

export default Profile
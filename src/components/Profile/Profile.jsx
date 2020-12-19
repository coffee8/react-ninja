import p from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {
    return (
        <div className={p.content}>
            <ProfileInfo/>
            <div>
                <MyPostsContainer/>
            </div>
        </div>
    )
}

export default Profile
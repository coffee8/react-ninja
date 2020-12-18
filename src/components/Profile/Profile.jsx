import p from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div className={p.content}>
            <ProfileInfo/>
            <div>
                <MyPostsContainer /*store={props.store}*//>
            </div>
        </div>
    )
}

export default Profile
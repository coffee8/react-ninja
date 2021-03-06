import p from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={p.content}>
            <div>
                <ProfileInfo profile={props.profile}
                             status={props.status}
                             updateUserStatus={props.updateUserStatus}
                             isOwner={props.isOwner}
                             updateUserPhoto={props.updateUserPhoto}
                             updateUserProfile={props.updateUserProfile}
                />
            </div>
            <div>
                <MyPostsContainer/>
            </div>
        </div>
    )
}

export default Profile
import p from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div className={p.content}>
            <ProfileInfo/>
            <div>
                <MyPosts/>
            </div>
        </div>
    )
}

export default Profile
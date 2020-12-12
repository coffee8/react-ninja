import p from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    debugger
    return (
        <div className={p.content}>
            <ProfileInfo/>
            <div>
                <MyPosts postElements = {props.state}/>
            </div>
        </div>
    )
}

export default Profile
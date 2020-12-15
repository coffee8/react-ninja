import p from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div className={p.content}>
            <ProfileInfo/>
            <div>
                <MyPosts postElements={props.profilePage}
                         newPostText={props.profilePage.newPostText}
                         updateNewPostText={props.updateNewPostText}
                         addPost={props.addPost}
                         dispatch={props.dispatch}
                />

            </div>
        </div>
    )
}

export default Profile
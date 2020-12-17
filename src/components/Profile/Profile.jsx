import p from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div className={p.content}>
            <ProfileInfo/>
            <div>
                <MyPostsContainer //postElements={props.profilePage}
                                  // newPostText={props.profilePage.newPostText}
                                  // dispatch={props.dispatch}
                                  store={props.store}
                />

            </div>
        </div>
    )
}

export default Profile
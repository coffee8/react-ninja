import s from './ProfileInfo.module.css';
import Preloader from "../../../assets/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>;
    }
    return (
        <div>
            {/*<div className={s.margin}>
                <img src='https://www.pics4learning.com/images/pics-banner1-1300.jpg'></img>
            </div>*/}

            <div className={s.item} >
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;
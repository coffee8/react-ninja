import s from './ProfileInfo.module.css';
import Preloader from "../../../assets/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import {useState} from "react";
import userPhoto from '../../../assets/images/userPhoto.png';
import ProfileTable from "./ProfileTable";
import ProfileTableForm from "./ProfileTableForm";

const ProfileInfo = (props) => {

    const [editMode, setEditMode] = useState(false)

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.updateUserPhoto(e.target.files[0]);
        }
    }

    if (!props.profile) {
        return <Preloader/>;
    }
    return (
        <div>
            <div className={s.item}>
                <img src={props.profile.photos.large || userPhoto}/>
                {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                <div>
                    <b>{props.profile.fullName}</b>
                </div>

                <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
                <div> {editMode ?
                    <ProfileTableForm profile={props.profile}/> : <ProfileTable profile={props.profile}/>}
                </div>
            </div>
        </div>
    );
};


export default ProfileInfo;
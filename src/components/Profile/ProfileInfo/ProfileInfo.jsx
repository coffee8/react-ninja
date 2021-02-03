import s from './ProfileInfo.module.css';
import Preloader from "../../../assets/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import React, {useState} from "react";
import userPhoto from '../../../assets/images/userPhoto.png';
import ProfileTable from "./ProfileTable";
import ProfileTableFormik from "./ProfileTableFormik";

const ProfileInfo = (props) => {

    const [editMode, setEditMode] = useState(false);

    const onSubmit = (formData) => {
        const formDataJSON = {
            lookingForAJobDescription: formData.lookingForAJobDescription,
            lookingForAJob: !!formData.lookingForAJob,
            fullName: formData.fullName,
            userId: formData.userId,
            aboutMe: 'null',
            contacts: {
                facebook: formData.facebook,
                website: formData.website,
                twitter: formData.twitter,
                github: formData.github,
            }
        }
        props.updateUserProfile(formDataJSON).then(() => {
            setEditMode(false);
        });
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.updateUserPhoto(e.target.files[0]);
        }
    };

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
                <div>
                    {editMode
                        ? <ProfileTableFormik profile={props.profile} handleSubmit={onSubmit}/>
                        : <ProfileTable profile={props.profile} isOwner={props.isOwner}
                                        activateEditMode={() => {
                                            setEditMode(true)
                                        }}/>}
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
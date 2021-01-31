import s from '../ProfileInfo.module.css'
import * as React from "react";
import {useState} from "react";
import {useEffect} from "react";

const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false);

    const [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    return (
        <div>
            {
                !editMode &&
                <div>
                    <b>Status: </b><span onDoubleClick={activateEditMode}> {props.status || "------"} </span>
                </div>
            }
            {
                editMode &&
                <div>
                    <input onBlur={deactivateEditMode}
                           value={status}
                           onChange={onStatusChange}
                           autoFocus={true}/>
                </div>
            }
        </div>
    );
}

export default ProfileStatusWithHooks;
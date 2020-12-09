import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.dialog}>
            {props.message}
        </div>
    )
}

const Dialogs = () => {
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id='1' name='Dima'/>
                <DialogItem id='2' name='Kolya'/>
                <DialogItem id='3' name='Sveta'/>
            </div>

            <div className={s.messages}>
                <Message message='HI'/>
                <Message message='HOW'/>
                <Message message='R U'/>
            </div>
        </div>

    )
}

export default Dialogs


import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import * as React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/state";

// let addMessage = () => {
//     let text = newMessageElement.current.value
//     alert(text)
// }

const Dialogs = (props) => {

    let dialogs = props.state.dialogData.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messages = props.state.messageData.map(m => <Message message={m.message}/>)

    let newMessageElement = React.createRef()

    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value
        props.dispatch(updateNewMessageTextActionCreator(text))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs}
            </div>

            <div className={`${s.messages}`}>
                {messages}
                <textarea onChange={onMessageChange}
                          ref={newMessageElement}
                          value={props.state.newMessageText}/>
                <div>
                    <button onClick={addMessage}>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs


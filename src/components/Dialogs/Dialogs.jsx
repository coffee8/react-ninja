import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import * as React from "react";

const Dialogs = (props) => {

    let dialogs = props.dialogsPage.dialogData.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messages = props.dialogsPage.messageData.map(m => <Message message={m.message}/>)

    let onSendMessageClick = () => {
        props.onSendMessageClick()
    }

    let onMessageChange = (e) => {
        let text = e.target.value
        props.onMessageChange(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs}
            </div>

            <div className={`${s.messages}`}>
                {messages}
                <textarea onChange={onMessageChange}
                          placeholder={`Enter your message`}
                          value={props.newMessageText}/>
                <div>
                    <button onClick={onSendMessageClick}>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs


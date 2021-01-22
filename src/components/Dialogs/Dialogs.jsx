import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import * as React from 'react';
import AddMessageReduxForm from "./AddMessageForm";

const Dialogs = (props) => {

    let dialogs = props.dialogsPage.dialogData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messages = props.dialogsPage.messageData.map(m => <Message message={m.message}/>);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs}
            </div>
            <div className={`${s.messages}`}>
                {messages}
                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};

export default Dialogs;


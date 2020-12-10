import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

const Dialogs = () => {

    let dialogData = [{name: 'Dima', id: 1},
                      {name: 'Kolya', id: 2},]

    let dialogs = dialogData.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messageData = [{message: 'Hi', id: 1},
                       {message: 'Privet', id: 2},]

    let messages = messageData.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogs }
            </div>

            <div className={s.messages}>
                { messages }
            </div>
        </div>
    )
}

export default Dialogs


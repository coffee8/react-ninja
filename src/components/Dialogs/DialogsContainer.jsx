import * as React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }

    return (
        <Dialogs newMessageText={state.newMessageText}
                 dialogsPage={state}
                 onMessageChange={onMessageChange}
                 onSendMessageClick={onSendMessageClick}/>
    )
}

export default DialogsContainer


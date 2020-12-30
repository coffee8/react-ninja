import * as React from 'react'
import {sendMessage, updateNewMessageText} from '../../redux/dialogsReducer'
import Dialogs from './Dialogs';
import {connect} from 'react-redux'
 
let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText
    }
}
//
// let mapDispatchToProps = (dispatch) => {
//     return {
//         onSendMessageClick: () => {
//             dispatch(sendMessageActionCreator())
//         },
//         onMessageChange: (text) => {
//             dispatch(updateNewMessageTextActionCreator(text))
//         }
//     }
// }

const DialogsContainer = connect(mapStateToProps, {sendMessage, updateNewMessageText})(Dialogs);


export default DialogsContainer


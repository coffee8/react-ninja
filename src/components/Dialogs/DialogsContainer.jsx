import * as React from 'react';
import {sendMessage, updateNewMessageText} from '../../redux/dialogsReducer'
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
 
let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText,
    };
};


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

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, {sendMessage, updateNewMessageText})(AuthRedirectComponent);

export default DialogsContainer;


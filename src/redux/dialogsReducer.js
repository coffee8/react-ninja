const SEND_MESSAGE = `SEND-MESSAGE`
const UPDATE_NEW_MESSAGE_TEXT = `UPDATE-NEW-MESSAGE-TEXT`

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 42,
                message: state.newMessageText
            }
            state.messageData.push(newMessage)
            state.newMessageText = ``
            break;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage
            break;
        default:
            return state
    }
    return state
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextActionCreator = (newMessage) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessage: newMessage
})

export default dialogsReducer
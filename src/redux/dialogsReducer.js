const SEND_MESSAGE = `SEND-MESSAGE`
const UPDATE_NEW_MESSAGE_TEXT = `UPDATE-NEW-MESSAGE-TEXT`

const initialState = {
    dialogData:
        [{name: 'Dima', id: 1},
            {name: 'Kolya', id: 2},],
    messageData:
        [{message: 'Hi', id: 1},
            {message: 'Privet', id: 2},],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 42,
                message: state.newMessageText
            }
            return {
                ...state,
                messageData: [...state.messageData, newMessage],
                newMessageText: ``
            }
        case UPDATE_NEW_MESSAGE_TEXT:
             return {
                ...state,
                newMessageText: action.newMessage
            }
        default:
            return state
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextActionCreator = (newMessage) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessage: newMessage
})

export default dialogsReducer
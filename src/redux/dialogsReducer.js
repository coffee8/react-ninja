const SEND_MESSAGE = `SEND-MESSAGE`;

const initialState = {
    dialogData: [
        {name: 'Dima', id: 1},
        {name: 'Kolya', id: 2}
    ],
    messageData: [
        {message: 'Hi', id: 1},
        {message: 'Privet', id: 2}
    ],
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 42,
                message: action.newMessageBody
            }
            return {
                ...state,
                messageData: [...state.messageData, newMessage],
            };
        default:
            return state;
    }
}

export const sendMessage = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody: newMessageBody})

export default dialogsReducer;
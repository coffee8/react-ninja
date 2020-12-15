const ADD_POST = `ADD-POST`
const UPDATE_NEW_POST_TEXT = `UPDATE-NEW-POST-TEXT`
const ADD_MESSAGE = `ADD-MESSAGE`
const UPDATE_NEW_MESSAGE_TEXT = `UPDATE-NEW-MESSAGE-TEXT`

const store = {
    state: {
        dialogsPage: {
            dialogData:
                [{name: 'Dima', id: 1},
                    {name: 'Kolya', id: 2},],
            messageData:
                [{message: 'Hi', id: 1},
                    {message: 'Privet', id: 2},],
            newMessageText: ''
        },
        profilePage: {
            postData:
                [{message: 'Hi, how are you?', likeCount: 0},
                    {message: 'Gooooood', likeCount: 21}],
            newPostText: 'Напиши что-нибудь :)'
        }
    },

    getState() {
        return this.state
    },

    addPost() {
        let newPost = {
            id: 5,
            message: this.state.profilePage.newPostText,
            likeCount: 0
        };
        this.state.profilePage.postData.push(newPost);
        this.state.profilePage.newPostText = ''
        this.renderEntireTree(this.state)
    },

    updateNewPostText(newText) {
        this.state.profilePage.newPostText = newText;
        this.renderEntireTree(this.state)
    },

    subscriber(observer) {
        this.renderEntireTree = observer
    },

    renderEntireTree() {
        console.log('Hiiiiiii')
    },

    dispatch(action) {
        switch (action.type) {
            case ADD_POST:
                let newPost = {
                    id: 5,
                    message: this.state.profilePage.newPostText,
                    likeCount: 0
                }
                this.state.profilePage.postData.push(newPost)
                this.state.profilePage.newPostText = ''
                this.renderEntireTree(this.state)
                break;
            case UPDATE_NEW_POST_TEXT:
                this.state.profilePage.newPostText = action.newText;
                this.renderEntireTree(this.state)
                break;
            case ADD_MESSAGE:
                let newMessage = {
                    id: 42,
                    message: this.state.dialogsPage.newMessageText
                }
                this.state.dialogsPage.messageData.push(newMessage)
                this.state.dialogsPage.newMessageText = ``
                this.renderEntireTree(this.state)
                break;
            case UPDATE_NEW_MESSAGE_TEXT:
                this.state.dialogsPage.newMessageText = action.newMessage
                this.renderEntireTree(this.state)
                break;
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (newText) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText
})
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (newMessage) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessage: newMessage
})

window.store = store
export default store
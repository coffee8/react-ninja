import dialogsReducer from "./dialogsReducer";
import profilesReducer from "./profilesReducer";

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

        this.state.dialogsPage = dialogsReducer(this.state.dialogsPage, action)
        this.state.profilePage = profilesReducer(this.state.profilePage, action)
        this.renderEntireTree(this.state)
    }
}

window.store = store
export default store
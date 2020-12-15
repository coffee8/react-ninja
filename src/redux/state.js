const ADD_POST = `ADD-POST`
const UPDATE_NEW_POST_TEXT = `UPDATE-NEW-POST-TEXT`

const store = {
    state: {
        dialogsPage: {
            dialogData:
                [{name: 'Dima', id: 1},
                    {name: 'Kolya', id: 2},],
            messageData:
                [{message: 'Hi', id: 1},
                    {message: 'Privet', id: 2},]
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
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (newText) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText
})

window.store = store
export default store
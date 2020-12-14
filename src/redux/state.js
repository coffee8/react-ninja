import {renderEntireTree} from '../render'
let state = {
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
        newPostText: 'IT_KAMASURTA'
    }
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCount: 0
    };
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = ''
    renderEntireTree(state)
}

export let updateNewPostText = (newText) => {
    debugger
    state.profilePage.newPostText = newText;
    renderEntireTree(state)
}
export default state
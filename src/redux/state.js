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
            {message: 'Gooooood', likeCount: 21}]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likeCount: 0
    };
    state.profilePage.postData.push(newPost);
    renderEntireTree(state)
}

export default state
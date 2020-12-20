const TOGGLE_FOLLOW = `TOGGLE_FOLLOW`
const SET_USERS = `SET_USERS`;

const initialState = {
    users: [
        // {
        //     name: 'Burak Keko',
        //     id: 1,
        //     location: 'Istanbul, Turkey',
        //     status: 'Hii',
        //     followed: false,
        //     avatar: `https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg`
        // },
        // {
        //     name: 'Kenan Ke',
        //     id: 2,
        //     location: 'Tekirdag, Turkey',
        //     status: 'devamke',
        //     followed: true,
        //     avatar: `https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg`
        // }
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId)
                        return {...u, followed: !u.followed}
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export const onFollowActionCreator = (userId) => ({type: TOGGLE_FOLLOW, userId})
export const setUsersActionCreator = (users) => ({type: SET_USERS, users})

export default usersReducer
import s from './User.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/images/userPhoto.png'

const Users = (props) => {
    // {
    //     name: 'Burak Keko',
    //         id: 1,
    //     location: 'Istanbul, Turkey',
    //     status: 'Hii',
    //     followed: false,
    //     avatar: `https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg`
    // },
    // {
    //     name: 'Kenan Ke',
    //         id: 2,
    //     location: 'Tekirdag, Turkey',
    //     status: 'devamke',
    //     followed: true,
    //     avatar: `https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg`
    // }
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>
                props.setUsers(response.data.items))
        }
    }
    return (
        <div>
            <div>
                <button onClick={getUsers}>Get Users</button>
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div className={s.item}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => props.onFollow(u.id)}>Unfollow</button>
                                : <button onClick={() => props.onFollow(u.id)}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location"}</div>
                            <div>{u.id}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users
import s from './User.module.css'

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                name: 'Burak Keko',
                id: 1,
                location: 'Istanbul, Turkey',
                status: 'Hii',
                followed: false,
                avatar: `https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg`
            },
            {
                name: 'Kenan Ke',
                id: 2,
                location: 'Tekirdag, Turkey',
                status: 'devamke',
                followed: true,
                avatar: `https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg`
            }
        ])
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div className={s.item}>
                            <img src={u.avatar}/>
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
                            <div>{u.location}</div>
                            <div>{u.id}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users
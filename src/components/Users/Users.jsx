import s from './User.module.css'

const Users = (props) => {

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
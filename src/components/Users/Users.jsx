import s from './User.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/images/userPhoto.png'
import * as React from "react";

class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>
            this.props.setUsers(response.data.items))
    }

    render() {
        return (
            <div> {
                this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div className={s.item}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => this.props.onFollow(u.id)}>Unfollow</button>
                                : <button onClick={() => this.props.onFollow(u.id)}>Follow</button>}
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
}

export default Users
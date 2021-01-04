import s from "./User.module.css";
import userPhoto from "../../assets/images/userPhoto.png";
import {NavLink} from "react-router-dom";
import {userAPI} from "../../api/api";


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && s.selectedPage}
                                 onClick={() => props.onPageChanged(p)}> {p}</span>
                })}

            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div className={s.item}>
                            <NavLink to={`/profile/` + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => {
                                    userAPI.unfollowProfile(u.id)
                                        .then(response => {
                                            if (response) {
                                                props.onFollow(u.id)
                                            }
                                        })
                                }}>
                                    Unfollow
                                </button>
                                : <button onClick={() =>
                                    userAPI.followProfile(u.id)
                                        .then(response => {
                                            if (response) {
                                                props.onFollow(u.id)
                                            }
                                        })}>
                                    Follow
                                </button>}
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
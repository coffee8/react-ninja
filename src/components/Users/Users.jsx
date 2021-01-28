import s from './User.module.css';
import userPhoto from '../../assets/images/userPhoto.png';
import {NavLink} from 'react-router-dom';
import MuiPagination from "./MuiPagination";

let Users = (props) => {

    return (
        <div>
            <div>
                <MuiPagination totalUsersCount={props.totalUsersCount}
                               pageSize={props.pageSize}
                               currentPage={props.currentPage}
                               onPageChanged={props.onPageChanged}
                />
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
                            {u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                                  onClick={() => {
                                                      props.unfollowProfile(u.id)
                                                  }}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => {
                                              props.followProfile(u.id)
                                          }}>Follow</button>}
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
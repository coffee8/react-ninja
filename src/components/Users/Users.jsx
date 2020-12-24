import s from './User.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/images/userPhoto.png'
import * as React from "react";

class Users extends React.Component {

    componentDidMount() {
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsers(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
            .then(response =>
                this.props.setUsers(response.data.items))
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span className={this.props.currentPage === p && s.selectedPage}
                                     onClick={() => this.onPageChanged(p)}> {p}</span>
                    })}

                </div>
                {
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
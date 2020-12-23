import React from 'react'
import { NavLink } from 'react-router-dom';
import userPhoto from '../../img/Avatar.jpg'
import classes from './Users.module.css'
import * as axios from 'axios';


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={`${props.currentPage === p && classes.selectedPage} ${classes.number}`}
                    onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div className={classes.users} key={u.id}>
                <div className={classes.usersMain}>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={classes.photo} />
                    </NavLink>
                    {u.followed
                        ? <button onClick={() => {

                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers: {
                                    'API-KEY': "22ff04a2-4fef-4de7-ad60-39bd125ce3e6"
                                }
                            }).then(response => {
                                if (response.data.resultCode === 0) {
                                    props.unfollow(u.id)
                                }
                            })

                        }}>unfollow</button>

                        : <button onClick={() => {

                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    'API-KEY': "22ff04a2-4fef-4de7-ad60-39bd125ce3e6"
                                }
                            }).then(response => {
                                if (response.data.resultCode === 0) {
                                    props.follow(u.id)
                                }
                            })

                        }}>follow</button>}
                </div>
                <div>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </div>
                <div>
                    <div>{"u.location.city"}</div>
                    <div>{"u.location.country"}</div>
                </div>
            </div>
            )
        }
    </div >
}

export default Users
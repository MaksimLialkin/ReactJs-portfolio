import React from 'react'
import { NavLink, Redirect } from 'react-router-dom';
import userPhoto from '../../img/Avatar.jpg'
import classes from './Users.module.css'


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

                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => { props.unfollow(u.id) }}>unfollow</button>

                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => { props.follow(u.id) }}>follow</button>}
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
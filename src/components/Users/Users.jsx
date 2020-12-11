import Axios from 'axios';
import React from 'react';
import classes from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../img/Avatar.jpg'

const Users = (props) => {

    if (props.users.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        })

    }
    return <div>
        {
            props.users.map(u => <div className={classes.users} key={u.id}>
                <div className={classes.usersMain}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={classes.photo} />
                    {u.followed
                        ? <button onClick={() => { props.unfollow(u.id) }}>unfollow</button>
                        : <button onClick={() => { props.follow(u.id) }}>follow</button>}
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
    </div>
}

export default Users
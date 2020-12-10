import React from 'react';
import classes from './Users.module.css'

const Users = (props) => {

    // if (props.users.length === 0) {
    //     props.setUsers([
    //         {
    //             id: 1,
    //             photoUrl: 'https://www.ferra.ru/thumb/1800x0/filters:quality(75):no_upscale()/imgs/2020/11/22/13/4358185/d262932812b77c55738af7b3e9cdcb78ce4a34a6.jpg',
    //             followed: false,
    //             fullname: 'Maksim',
    //             status: 'I am a frontend-developer',
    //             location: { city: 'Moscow', country: 'Russia' }
    //         },
    //         {
    //             id: 2,
    //             photoUrl: 'https://www.ferra.ru/thumb/1800x0/filters:quality(75):no_upscale()/imgs/2020/11/22/13/4358185/d262932812b77c55738af7b3e9cdcb78ce4a34a6.jpg',
    //             followed: true,
    //             fullname: 'Mariia',
    //             status: 'I am a assistant',
    //             location: { city: 'New-York', country: 'USA' }
    //         },
    //         {
    //             id: 3,
    //             photoUrl: 'https://www.ferra.ru/thumb/1800x0/filters:quality(75):no_upscale()/imgs/2020/11/22/13/4358185/d262932812b77c55738af7b3e9cdcb78ce4a34a6.jpg',
    //             followed: false, fullname: 'Valeriy', status: 'I am a assistant too', location: { city: 'Paris', country: 'France' }
    //         },
    //     ])
    // }
    return <div>
        {
            props.users.map(u => <div className={classes.users} key={u.id}>
                <div className={classes.usersMain}>
                    <img src={u.photoUrl} className={classes.photo} />
                    {u.followed
                        ? <button onClick={() => { props.unfollow(u.id) }}>unfollow</button>
                        : <button onClick={() => { props.follow(u.id) }}>follow</button>}
                </div>
                <div>
                    <div>{u.fulllname}</div>
                    <div>{u.status}</div>
                </div>
                <div>
                    <div>{u.location.city}</div>
                    <div>{u.location.country}</div>
                </div>
            </div>
            )

        }
    </div>
}

export default Users
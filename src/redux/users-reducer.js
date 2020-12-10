const FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {
            id: 1,
            photoUrl: 'https://www.ferra.ru/thumb/1800x0/filters:quality(75):no_upscale()/imgs/2020/11/22/13/4358185/d262932812b77c55738af7b3e9cdcb78ce4a34a6.jpg',
            followed: false,
            fullname: 'Maksim',
            status: 'I am a frontend-developer',
            location: { city: 'Moscow', country: 'Russia' }
        },
        {
            id: 2,
            photoUrl: 'https://www.ferra.ru/thumb/1800x0/filters:quality(75):no_upscale()/imgs/2020/11/22/13/4358185/d262932812b77c55738af7b3e9cdcb78ce4a34a6.jpg',
            followed: true,
            fullname: 'Mariia',
            status: 'I am a assistant',
            location: { city: 'New-York', country: 'USA' }
        },
        {
            id: 3,
            photoUrl: 'https://www.ferra.ru/thumb/1800x0/filters:quality(75):no_upscale()/imgs/2020/11/22/13/4358185/d262932812b77c55738af7b3e9cdcb78ce4a34a6.jpg',
            followed: false, fullname: 'Valeriy', status: 'I am a assistant too', location: { city: 'Paris', country: 'France' }
        },
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                // users: [...state.users],
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users] }
        }
        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer;


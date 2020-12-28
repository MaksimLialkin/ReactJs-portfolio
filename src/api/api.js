import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        'API-KEY': "22ff04a2-4fef-4de7-ad60-39bd125ce3e6"
    }
})

export const usersAPI = {
    getUsers: (currentPage, pageSize) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        });
    },
    getUsersProfile: (userId) => {
        return instance.get(`profile/` + userId).then(response => {
            return response.data
        });
    },
    follow: (id) => {
        return instance.post(`follow/${id}`)
    },
    unfollow: (id) => {
        return instance.delete(`follow/${id}`)
    }
}






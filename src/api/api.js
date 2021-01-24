import * as axios from 'axios';

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "48ced017-e897-4d0f-ba53-2ad549823479"
    }
})

export const userAPI = {
    getUsers(pageSize = 10, currentPage = 1) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => {
                return response.data;
            });
    },

    getProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI object.')
        return profileAPI.getProfile(userId);

    },

    unfollowProfile(userId) {
        return instance.get(`follow/${userId}`);
    },

    followProfile(userId) {
        return instance.get(`follow/${userId}`);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },

    updateStatus(status) {
        return instance.put(`profile/status/`, {status: status});
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}

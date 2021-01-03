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
                return response.data
            });
    }
}
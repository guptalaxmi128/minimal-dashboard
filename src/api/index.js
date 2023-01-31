import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api/furnishi',
});

api.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).accessToken}`;
    }
    return req;
}, (error) => {
    return Promise.reject(error);
});

export const register = (userInfo) => api.post(`/registerPartner`, userInfo);
export const login = (userInfo) => api.post(`/loginPartner`, userInfo);

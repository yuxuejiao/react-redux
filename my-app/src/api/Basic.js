import axios from 'axios'
import { API_ROOT } from './Config'

// axios.defaults.withCredentials = false

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
})

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
})

const base = API_ROOT;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
export const getJSON = (method, api, options = {}) => {
    const {data} = options
    return axios[method](base + api,data)
}

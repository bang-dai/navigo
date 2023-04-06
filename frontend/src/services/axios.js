import axios from 'axios';

const Axios = axios.create({
    baseURL: process.env.REACT_APP_API
})

Axios.interceptors.request.use(request => {
    //this is not recommanded way, demo only. We have to get our JWT from login with our credentials
    request.headers.Authorization = 'Bearer ' + process.env.REACT_APP_JWT

    return request
})

export default Axios
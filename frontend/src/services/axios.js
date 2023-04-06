import axios from 'axios';

const Axios = axios.create({
    baseURL: 'http://localhost:8000/api'
})

Axios.interceptors.request.use(request => {
    request.headers.Authorization = 'Bearer ' + process.env.REACT_APP_JWT

    return request
})

export default Axios
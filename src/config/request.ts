import axios from 'axios'

const request = axios.create({
    baseURL: import.meta.env.VITE_API_HOST,
    timeout: 60000,
    headers: {
        Host: 'www.omdbapi.com',
        Connection: 'keep-alive',
        Accept: 'text/plain, */*; q=0.01',
        Referer: 'http://www.omdbapi.com/',
    },
})

export default {
    get: (url: string, params?: any, headers = {}) =>
        request({ method: 'get', url, params, headers }),
    post: (url: string, data?: any, headers = {}) =>
        request({ method: 'post', url, data, headers }),
    put: (url: string, data?: any) => request({ method: 'put', url, data }),
    delete: (url: string) => request({ method: 'delete', url })
}

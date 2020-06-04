import axios from 'axios'
import baseURL from './baseUrl'
import qs from 'qs'
import store from '../store'

const instance = axios.create({
    baseURL,
    timeout: 60000
});

const xhr = {
    get(url, data, config) {
        return new Promise((resolve, reject) => {
            instance.get(url, {params: data}, config).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    },
    fetch(url, data, config, methods) {
        return new Promise((resolve, reject) => {
            instance[methods](url, data, config).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    },
    post(url, data, config) {
        return this.fetch(url, data, config, 'post')
    }
}


//请求拦截器新增非get请求添加请求头和token
instance.interceptors.request.use(config => {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    let {token} = store.getState()
    if (token) {
        config.data = qs.stringify({...config.data, key: token})
        config.headers.token = token
    } else {
        config.data = qs.stringify(config.data)
    }
    return config;
}, error => {
    return Promise.reject(error)
})

//响应拦截器
instance.interceptors.response.use(response => {
    // console.log(response)
    // 对响应数据做点什么
    return response;
}, error => {
    if (error.response.statusText == 'Gateway Timeout') {
        console.log('超时', error.response)
    }
    if (error.response) {
        if (error.response.status == '401') {
            window.location.href = '/'
        }
    }
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default xhr

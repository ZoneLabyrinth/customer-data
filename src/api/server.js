import axios from 'axios'
import envconfig from '../envconfig'
import { Toast } from 'antd-mobile'


export default class server {
    axios(method, url, parmas) {
        return new Promise((resolve, reject) => {
            if (typeof parmas !== 'object') parmas = {}

            let config = parmas;
            config = {
                method,
                url,
                baseURL: envconfig.baseURL,
                headers: { 'Content-Type': 'application/json;charset=UTF-8' },
                parmas: null,
                data: null,
                timeout: 5000,
                withCredentials: true,
                validateStatus: (status) => {
                    return status >= 200 && status <= 300;
                },
                ...parmas
            }
            //配置拦截器
            axios.interceptors.request.use(req => {
                return req
            }, err => {
                Toast.fail('请求错误', 1)
                return Promise.reject(err)
            })

            axios.interceptors.response.use(res => {
                return res
            }, err => {
                if (err.response) {
                    switch (err.response.status) {
                        case 400:
                            Toast.fail('400,错误的请求', 1)
                            break;
                        case 401:
                            Toast.fail('401,未授权', 1)
                            break;
                        case 404:
                            Toast.fail('404,接口未找到', 1)
                            break;
                        case 405:
                            Toast.fail('405,不支持该请求方式', 1)
                            break;
                        case 500:
                            Toast.fail('500,服务器错误', 1)
                            break;
                        case 502:
                            Toast.fail('502，网关错误', 1)
                            break;
                    }
                }
                return Promise.reject(err)
            })
            //配置request
            axios.request(config).then(res => {
                resolve(res.data)
            }, err => {
                // 已经配置响应interceptors，以下内容不会执行
                if (err.response) {
                    reject(err.response.data)
                } else {
                    reject(err)
                }
            })

        })
    }
}
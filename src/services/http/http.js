/**
 * Created by mt on 2017/11/27.
 */
import axios from 'axios'
import Vue from 'vue'
// import { Message } from 'element-ui'

// 取消请求
const CancelToken = axios.CancelToken

axios.defaults.baseURL = './'
/**
 * 在请求或响应被 then 或 catch 处理前拦截它们。
 * 添加请求拦截器
 * */
axios.interceptors.request.use(function (config) {
    // 发送请求前做些什么
    Vue.prototype.$Progress.start()
    return config
}, function (error) {
    // 请求错误做些什么
    Vue.prototype.$Progress.fail()
    return Promise.reject(error)
})

/**
 * 添加响应拦截器
 * */
axios.interceptors.response.use(function (response) {
    // 对响应数据做些什么
    Vue.prototype.$Progress.finish()
    // let code = response.data.code
    // if (code === 50010 || code === 70005) {
    //     Message.error('登陆过期请重新登陆')
    //     location.href = '#/login'
    //     location.reload()
    // }
    return response
}, function (error) {
    // 对响应错误做些什么
    Vue.prototype.$Progress.fail()
    return Promise.reject(error)
})

/**
 * 封装请求
 **/

const get = (url, data) => {
    let request
    if (typeof data === 'object') {
        request = axios.get(url, {
            params: data,
            cancelToken: new CancelToken(function executor (c) {
                // window.$HttpPendingList.push(c)
            })
        }).catch(function (thrown) {
            if (axios.isCancel(thrown)) {
                console.log('Request canceled')
            } else {
                // handle error
            }
            Vue.prototype.$Progress.fail()
        })
    } else {
        request = axios.get(url + (data ? ('/' + data) : ''), {
            cancelToken: new CancelToken(function executor (c) {
                // window.$HttpPendingList.push(c)
            })
        }).catch(function (thrown) {
            if (axios.isCancel(thrown)) {
                console.log('Request canceled')
            } else {
                // handle error
            }
            Vue.prototype.$Progress.fail()
        })
    }
    return request
}

const post = (url, data) => {
    return axios.post(url, data, {
        cancelToken: new CancelToken(function executor (c) {
            // window.$HttpPendingList.push(c)
        })
    }).catch(function (thrown) {
        if (axios.isCancel(thrown)) {
            console.log('Request canceled')
        } else {
            // handle error
        }
        Vue.prototype.$Progress.fail()
    })
}
const put = (url, data) => {
    return axios.put(url, data, {
        cancelToken: new CancelToken(function executor (c) {
            // window.$HttpPendingList.push(c)
        })
    }).catch(function (thrown) {
        if (axios.isCancel(thrown)) {
            console.log('Request canceled')
        } else {
            // handle error
        }
        Vue.prototype.$Progress.fail()
    })
}

const del = (url, data) => {
    return axios.delete(url + (data ? '/' + data : ''), {
        cancelToken: new CancelToken(function executor (c) {
            // window.$HttpPendingList.push(c)
        })
    }).catch(function (thrown) {
        if (axios.isCancel(thrown)) {
            console.log('Request canceled')
        } else {
            // handle error
        }
        Vue.prototype.$Progress.fail()
    })
}

export default {get, post, put, del}

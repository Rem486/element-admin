/**
 * Created by mt on 2017/11/27.
 */
import http from './http'

// 什么模块
const a = {
    get (data) {
        return http.get('/haldksj', data)
    }
}

export {
    a
}

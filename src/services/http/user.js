/**
 * Created by mt on 2017/11/27.
 */
import http from './http'

// 用户相关接口
const userService = {
    // 登录
    login (data) {
        return http.post('/login', data)
    },
    // 退出
    logout (data) {
        return http.post('/logout', data)
    }
}

export default {
    userService
}

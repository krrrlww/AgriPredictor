//封装所有用户相关的接口函数

import request from '@/utils/http'

export const signupAPI = ({ username, password }) => {
    return request({
        url: '/user/register',
        method: 'POST',
        data: {
            username,
            password
        }
    })
}

export const loginAPI = ({ username, password }) => {
    return request({
        url: '/user/login',
        method: 'POST',
        data: {
            username,
            password
        }
    })
}
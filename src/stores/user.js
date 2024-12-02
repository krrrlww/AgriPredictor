//管理用户数据相关

import { defineStore } from "pinia";
import { ref } from 'vue'
import { loginAPI } from "@/apis/user";

export const userUserStore = defineStore('user', () => {
    //1.定义管理数据的state
    const userInfo = ref({})
    const name = ref('')
    //2.定义获取接口数据的action函数
    const getUserInfo = async ({ username, password }) => {
        const res = await loginAPI({ username, password })
        name.value = username
        userInfo.value = res
    }
    //退出时清理用户信息
    const clearUserInfo = () => {
        userInfo.value = {}
        name.value = ''
    }
    //3.以对象的格式把state和action return
    return {
        userInfo,
        name,
        getUserInfo,
        clearUserInfo
    }
}, {
    persist: true,
})
import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'
import Home from '@/views/Home/index.vue'
import Information from '@/views/Information/index.vue'
import AImaster from '@/views/AImaster/index.vue'
import Predictor from '@/views/Predictor/index.vue'
import Debate from '@/views/Debate/index.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Layout,
            children: [
                {
                    path: '',
                    component: Home
                },
                {
                    path: 'information',
                    component: Information
                },
                {
                    path: 'predictor',
                    component: Predictor
                },
                {
                    path: 'aimaster',
                    component: AImaster
                },
                {
                    path: 'debate',
                    component: Debate
                },
            ]
        },
        {
            path: '/login',
            component: Login
        }
    ]
})

export default router
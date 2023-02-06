import { createRouter, createWebHistory } from 'vue-router';

import { Login, Register } from '../views/auth';

const routes =[
    {
        path: '/', 
        name: 'home',
        component: () => import('./../views/pages/Home.vue')
    },
    {
        path: '/user/login', 
        name: 'user.login',
        component: Login
    },
    {
        path: '/user/register', 
        name: 'user.register',
        component: Register
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});


export default router;
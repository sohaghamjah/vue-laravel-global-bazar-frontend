import { createRouter, createWebHistory } from 'vue-router';

import { Login, Register } from '../views/auth';
import { Home, Shop } from '../views/pages'

const routes =[
    {
        path: '/', 
        name: 'home',
        component: Home,
        meta: {title: 'Home'}
    },
    {
        path: '/shop', 
        name: 'shop',
        component: Shop,
        meta: {title: 'Shop'}
    },
    {
        path: '/user/login', 
        name: 'user.login',
        component: Login,
        meta: {title: 'Login'}
    },
    {
        path: '/user/register', 
        name: 'user.register',
        component: Register,
        meta: {title: 'Register'}
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

const DEFAULT_TITLE = '404';

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || DEFAULT_TITLE;
    next()
})


export default router;
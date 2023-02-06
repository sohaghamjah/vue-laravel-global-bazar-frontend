import { createRouter, createWebHistory } from 'vue-router';

import { Login, Register } from '../views/auth';

const routes =[
    {
        path: '/', 
        name: 'home',
        component: () => import('./../views/pages/Home.vue'),
        meta: {title: 'Home'}
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
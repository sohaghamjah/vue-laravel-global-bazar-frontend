import { createRouter, createWebHashHistory } from 'vue-router';

const routes =[
    {
        path: '/', 
        name: 'home',
        component: () => import('./../views/pages/Home.vue')
    }
];

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
});


export default router;
import { createRouter, createWebHistory } from 'vue-router';

const routes =[
    {
        path: '/', 
        name: 'home',
        component: () => import('./../views/pages/Home.vue')
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});


export default router;
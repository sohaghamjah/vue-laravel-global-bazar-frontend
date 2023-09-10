import { createRouter, createWebHistory } from 'vue-router';
import { Login, Register } from '../views/auth';
import { userAuth } from "@/stores";
import { 
    Home, 
    Shop, 
    Seller, 
    SellerStore,
    SellerApply,
    MyOrderList,
    MyWisList,
    MyProfile,
    ProductDetails,
    Checkout,
 } from '../views/pages'

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
        path: '/checkout', 
        name: 'checkout',
        component: Checkout,
        meta: {title: 'checkout'}
    },
    {
        path: '/product/details', 
        name: 'product.details',
        component: ProductDetails,
        meta: {title: 'Product Details'}
    },
    {
        path: '/seller', 
        name: 'seller',
        component: Seller,
        meta: {title: 'Seller'}
    },
    {
        path: '/seller-store', 
        name: 'seller-store',
        component: SellerStore,
        meta: {title: 'Seller Store'}
    },
    {
        path: '/seller-apply', 
        name: 'seller-apply',
        component: SellerApply,
        meta: {title: 'Seller Apply'}
    },
    {
        path: '/user/login', 
        name: 'user.login',
        component: Login,
        meta: {title: 'Login', guest: true}
    },
    {
        path: '/user/register', 
        name: 'user.register',
        component: Register,
        meta: {title: 'Register', guest: true}
    },
    {
        path: '/my/orders', 
        name: 'user.orders',
        component: MyOrderList,
        meta: {title: 'My Orders', requiresAuth: true}
    },
    {
        path: '/my/wishlist', 
        name: 'user.wishlist',
        component: MyWisList,
        meta: {title: 'My Wishlist', requiresAuth: true}
    },
    {
        path: '/my/profile', 
        name: 'user.profile',
        component: MyProfile,
        meta: {title: 'My Profile', requiresAuth: true}
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

const DEFAULT_TITLE = '404';

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || DEFAULT_TITLE;

    const loggedIn = userAuth();
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (!loggedIn.user.meta) {
          next({ name: "user.login" });
        } else {
          next();
        }
    }else if(to.matched.some((record) => record.meta.guest)){
        if (loggedIn.user.meta) {
            next({ name: "user.profile" });
        } else {
            next();
        }
    }else{
        next();   
    }
})


export default router;
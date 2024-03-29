import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress'; 
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
    OrderDetails,
    OrderDone,
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
        meta: {title: 'checkout', requiresAuth: true}
    },
    {
        path: '/order-done', 
        name: 'order.done',
        component: OrderDone,
        meta: {title: 'Order Done', requiresAuth: true}
    },
    {
        path: '/product/details/:slug', 
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
        path: '/seller-store/:slug', 
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
        path: '/my/orders/details/:id',
        name: 'my.order.details',
        component: OrderDetails,
        meta: {title: "Order Details", requiresAuth: true}
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
    scrollBehavior() {
        return {
            top: 0,
            behavior: 'smooth',
        }
    }
});

const DEFAULT_TITLE = '404';

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || DEFAULT_TITLE;
    NProgress.start(); 
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

router.afterEach(() => {
    NProgress.done();
})
export default router;
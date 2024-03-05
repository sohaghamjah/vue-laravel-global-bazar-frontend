<script setup>
    import { useCart, userAuth } from '@/stores';
    import { CategoryDropdown } from '@/components';
    import { useCategory } from '@/stores';
    import { storeToRefs } from 'pinia';
    import { onMounted } from 'vue';
    const auth = userAuth();

    const { user } = storeToRefs(auth);
    
    const category = useCategory();
    const cart = useCart();

    const { navCategories } = storeToRefs(category);
    onMounted(() => {
        category.getNavCategories();
    });


    const cartMobile = () =>{
        cart.toggleCartSidebar();
    }
    const cateMenu = () => {
        cart.toggleCartSidebar();
    }

    const userLogout = async () => {
        const res = await auth.logout();
        if(res.status){
            router.push({ name: 'home'});
            notify.notificationElement('success', 'Logout Successfully!', 'Logout');
        }
    };

    const { cartItemsCount } = storeToRefs(cart);

</script>
<template>
    <div>
        <aside class="category-sidebar">
            <div class="category-header">
                <h4 class="category-title">
                    <i class="fas fa-align-left"></i><span>categories</span>
                </h4>
                <button class="category-close"><i class="icofont-close"></i></button>
            </div>
            <ul class="category-list">
               <CategoryDropdown v-for="(category, index) in navCategories?.data" :key="index" :category="category.name">
                    <li v-for="(sub_cat, sub_cat_index) in category.subcategories" :key="sub_cat_index">
                        <router-link :to="{
                            name: 'shop',
                            query: {products: sub_cat.slug}
                            }">
                            {{ sub_cat.name }}
                        </router-link>
                    </li>=
               </CategoryDropdown>
            </ul>
            <div class="category-footer">
                <p>All Rights Reserved by <a href="#">W3Coders</a></p>
            </div>
        </aside>
        <aside class="nav-sidebar">
            <div class="nav-header">
                <router-link :to="{name: 'home'}"><img src="@/assets/images/logo.png" alt="logo" /></router-link><button class="nav-close"><i
                        class="icofont-close"></i></button>
            </div>
            <div class="nav-content">
                <ul class="nav-list">
                    <li>
                        <a href="#" class="nav-link"><i class="icofont-home"></i>Home</a>
                    </li>
                    <li>
                        <router-link class="nav-link" :to="{name: 'shop'}"><i class="icofont-contacts"></i>shop</router-link>
                    </li>
                    <li>
                        <a class="nav-link" @click="userLogout"><i class="icofont-logout"></i>logout</a>
                    </li>
                </ul>
                <div class="nav-info-group">
                    <div class="nav-info">
                        <i class="icofont-ui-touch-phone"></i>
                        <p><small>call us</small><span>(+880) 183 8288 389</span></p>
                    </div>
                    <div class="nav-info">
                        <i class="icofont-ui-email"></i>
                        <p><small>email us</small><span>support@greeny.com</span></p>
                    </div>
                </div>
            </div>
        </aside>
        <!-- mobile footer menu  -->
        <div class="mobile-menu">
            <a href="/" class="active router-link-exact-active" title="Home Page" aria-current="page"><i
                    class="fas fa-home"></i><span>Home</span></a>
            <button class="cate-btn" @click="cateMenu" title="Category List">
                <i class="fas fa-list"></i><span>category</span>
            </button>
            <button class="cart-btn" @click="cartMobile" title="Cartlist">
                <i class="fas fa-shopping-basket"></i><span>Cart</span><sup>{{ cartItemsCount }}</sup>
            </button>
            <router-link v-if="user.data" :to="{name: 'user.wishlist'}" class="header-widget" title="Wishlist"><i class="fas fa-heart"></i><sup>{{ user.meta.wishlists.length }}</sup></router-link>
            <router-link :to="{name: 'user.login'}" class="" title="My Account"><i class="fas fa-user"></i><span>My Account</span></router-link>
        </div>
    </div>
</template>
<script setup>
    import {
        ProductPrice
    } from "@/components";
    import {
        useCart,
        useNotification,
        userAuth,
        useWishlist
    } from "@/stores";
    import {
        ref
    } from "vue";

    const props = defineProps({
        product: {
            type: Object,
            required: true,
        },
    });

    const auth     = userAuth();
    const cart     = useCart();
    const notify   = useNotification();
    const wishlist = useWishlist();

    // Add To Cart
    function addToCart(product) {
        cart.addToCart(product)
        notify.notificationElement('success', `${product.name} Added Successful`, "Success");
    }

    // Wishlist
    const addToWishlist = async (product) => {
        if (auth.user.data) {
            let res = await wishlist.addToWishlist(product);
            notify.notificationElement('success', `${product.name} ${res.data.message}`);
        } else {
            $("#login-modal").modal('show');
        }
    }
</script>
<template>
    <div class="col">
        <div class="product-card">
            <div class="product-media">
                <div class="product-label">
                    <label class="label-text sale" v-if="product.discount">{{ product . discount }}%</label>
                    <label class="label-text new">{{ product . conditions }}</label>
                </div>
                <button class="product-wish wish" @click.prevent="addToWishlist(product)">
                    <i class="fa fa-spinner fa-spin delete_icon" v-if="wishlist.loading == product.id" aria-hidden="true"></i>
                    <i class="fas fa-heart" v-else></i></button>
                <router-link class="product-image" :to="{ name: 'product.details', params: {slug: product.slug} }">
                    <img :src="$filters.makeImagePath(product.thumbnail)" alt="product" />
                </router-link>
            </div>
            <div class="product-content">
                <h6 class="product-name">
                    <router-link :to="{ name: 'product.details', params: {slug: product.slug} }">{{ product . name }}</router-link>
                </h6>
                <ProductPrice :product="product" />
                <button class="product-add" title="Add to Cart" @click.prevent="addToCart(product)">
                    <i class="fas fa-shopping-basket"></i><span>Add</span>
                </button>
            </div>
        </div>
    </div>
</template>

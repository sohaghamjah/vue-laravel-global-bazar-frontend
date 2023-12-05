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
        products: {
            type: Object,
            required: true,
        },
    });

    const auth     = userAuth();
    const cart     = useCart();
    const price    = ref();
    const notify   = useNotification();
    const wishlist = useWishlist();

    // Add To Cart
    function addToCart(product) {
        if (product.price) {
            var discount = (product.discount * product.price) / 100;
            var product_price = product.price - discount;
            price.value = product_price.toFixed();
        } else {
            var product_price = product.price;
            price.value = product_price.toFixed();
        }

        cart.addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            thumbnail: product.thumbnail,
        });

        notify.notificationElement('success', `${product.name} Added Successful`, "Success");
    }

    // Wishlist

    const addToWishlist = async (product) => {
        if (auth.user.data) {
            let res = await wishlist.addToWishlist(product);

            notify.notificationElement('success', `${product.name} ${res.data.message}`)

        } else {
            $("#login-modal").modal('show');
        }
    }
</script>
<template>
    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
        <div class="col" v-for="(product, index) in products.data" :key="index">
            <div class="product-card">
                <div class="product-media">
                    <div class="product-label">
                        <label class="label-text sale" v-if="product.discount">{{ product . discount }}%</label>
                        <label class="label-text new">{{ product . conditions }}</label>
                    </div>
                    <button class="product-wish wish" @click.prevent="addToWishlist(product)"><i
                            class="fas fa-heart"></i></button>
                    <router-link class="product-image" :to="{ name: 'product.details' }">
                        <img :src="$filters.makeImagePath(product.thumbnail)" alt="product" />
                    </router-link>
                </div>
                <div class="product-content">
                    <h6 class="product-name">
                        <a href="product-video.html">{{ product . name }}</a>
                    </h6>
                    <ProductPrice :product="product" />
                    <button class="product-add" title="Add to Cart" @click.prevent="addToCart(product)">
                        <i class="fas fa-shopping-basket"></i><span>Add</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

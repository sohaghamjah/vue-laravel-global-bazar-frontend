<script setup>
import { useCart, useNotification } from "@/stores";
import { storeToRefs } from "pinia";

const cart = useCart()
const notify = useNotification();

const closCartMenu = () => {
    cart.toggleCartSidebar();
}


const { cartItems, cartItemsCount, cartTotal }  = storeToRefs(cart);

const cartDelete = (index) => {
    cart.destroy(index);
    notify.notificationElement('success', 'Cart Deleted Successful', "Success");
}

const cartDecrement = (index) => {
    cart.decrement(index);
}

const cartIncrement = (index) => {
    cart.increment(index);
}
const couponForm = () => {
    $(this).hide(), $(".coupon-form").css("display", "flex");
}
</script>

<template>
    <aside class="cart-sidebar active" v-show="cart.isOpen">
        <div class="cart-header">
            <div class="cart-total" v-if="cartItemsCount !== 0">
                <i class="fas fa-shopping-basket"></i><span>total item ({{ cartItemsCount }})</span>
            </div>
            <div class="cart-total" v-else>
                <i class="fas fa-shopping-basket"></i><span>Your Cart Is Empty</span>
            </div>
            <button class="cart-close" @click="closCartMenu"><i class="icofont-close"></i></button>
        </div>
        <Transition name="switch" mode="out-in">
            <TransitionGroup name="list" tag="ul" class="cart-list" v-if="cartItemsCount !== 0">
                <li class="cart-item" v-for="(cart, index) in cartItems" :key="cart.id">
                <div class="cart-media">
                    <a href="#"><img :src="$filters.makeImagePath(cart.thumbnail)" alt="product" /></a><button
                        class="cart-delete" @click.prevent="cartDelete(index)">
                        <i class="far fa-trash-alt"></i>
                    </button>
                </div>
                <div class="cart-info-group">
                    <div class="cart-info">
                        <h6><a href="product-single.html">{{ cart.name }}</a></h6>
                        <p>Unit Price - {{ $filters.currencySymbol(cart.price) }}</p>
                    </div>
                    <div class="cart-action-group">
                        <div class="product-action">
                            <button class="action-minus" :disabled="cart.quantity === 1 ? true : false" title="Quantity Minus" @click.prevent="cartDecrement(index)">
                                <i class="icofont-minus"></i>
                            </button>
                            <input class="action-input"
                                title="Quantity Number" type="text" name="quantity" :value="cart.quantity" />
                            <button class="action-plus" title="Quantity Plus" @click.prevent="cartIncrement(index)">
                                <i class="icofont-plus"></i>
                            </button>
                        </div>
                        <h6>{{ $filters.currencySymbol((cart.quantity * cart.price)) }}</h6>
                    </div>
                </div>
                </li>
            </TransitionGroup>
            <ul class="cart-list" v-else>
                <li class="">
                    <img src="@/assets/images/cart/empty_cart.webp" class="cart_empty" alt="">
                    <h3 class="text-center text-warning">Oops! Your Cart Is Empty</h3>
                </li>
            </ul>
        </Transition>
        
        <div class="cart-footer">
            <button class="coupon-btn" @click="couponForm">Do you have a coupon code?</button>
            <form class="coupon-form">
                <input type="text" placeholder="Enter your coupon code" /><button type="submit">
                    <span>apply</span>
                </button>
            </form>
            <router-link class="cart-checkout-btn" :to="{name: 'checkout'}">
                <span class="checkout-label">Proceed to
                    Checkout</span><span class="checkout-price">{{ $filters.currencySymbol(cartTotal) }}</span>
            </router-link>
        </div>
    </aside>
</template>

<style scoped>
.cart_empty{
    width: 100%;        
    display: block;
}
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.switch-enter-from,
.switch-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.switch-enter-active,
.switch-leave-active {
  transition: all 0.5s ease;
}
</style>
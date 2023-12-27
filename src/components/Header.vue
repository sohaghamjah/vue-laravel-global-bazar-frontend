<script setup>
import { userAuth, useNotification, useCart } from "@/stores";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const cart = useCart();
const router = useRouter();
const auth = userAuth();
const notify = useNotification();
const { user, loading } = storeToRefs(auth);
const { cartItemsCount, cartTotal } = storeToRefs(cart);

const userLogout = async () => {
  const res = await auth.logout();
  if(res.status){
    router.push({ name: 'home'});
    notify.notificationElement('success', 'Logout Successfully!', 'Logout');
  }
};

  function search() {
    $(".header-form").toggleClass("active"),
      $(".header-src").children(".fa-search").toggleClass("fa-times");
  }

  function menu() {
    $("body").css("overflow", "hidden"),
      $(".nav-sidebar").addClass("active"),
      $(".nav-close").on("click", function () {
        $("body").css("overflow", "inherit"),
          $(".nav-sidebar").removeClass("active"),
          $(".backdrop").fadeOut();
      });
  }

  const cartShow = () => {
    cart.toggleCartSidebar();
  }


</script>

<template>
  <div>
    <div class="header-top">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-5">
            <div class="header-top-welcome">
              <p>Welcome to Ecomart in Your Dream Online Store!</p>
            </div>
          </div>
          <div class="col-md-5 col-lg-3"></div>
          <div class="col-md-7 col-lg-4">
            <ul class="header-top-list">
              <li>
                <router-link :to="{name: 'seller-apply'}" class="dropdown-item">Seller Apply</router-link>
              </li>
              <li><a href="faq.html">need help</a></li>
              <li><a href="contact.html">contact us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <header class="header-part">
      <div class="container">
        <div class="header-content">
          <div class="header-media-group">
            <button class="header-user" @click="menu">
              <img src="@/assets/images/menu.png" alt="user" /></button>
              <router-link :to="{name: 'home'}">
                <img src="@/assets/images/logo.png" alt="logo" />
              </router-link>
              <button @click="search" class="header-src"><i
                class="fas fa-search"></i></button>
          </div>
          <router-link :to="{name: 'home'}" class="header-logo">
            <img src="@/assets/images/logo.png" alt="logo" />
          </router-link>
          <form class="header-form">
            <input type="text" placeholder="Search anything..." /><button>
              <i class="fas fa-search"></i>
            </button>
          </form>
          <div class="header-widget-group hover-nav">
            <li class="nav-item dropdown">
              <a class="nav-link header-widget" href="#" data-bs-toggle="dropdown"><i class="fas fa-user"></i></a>
              <ul class="dropdown-menu dropdown-menu-end" v-if="!user.data">
                <li>
                  <router-link :to="{name: 'user.login'}" class="dropdown-item">Login</router-link>
                </li>
                <li>
                  <router-link :to="{name: 'user.register'}" class="dropdown-item">Register</router-link>
                </li>
              </ul>
              <ul class="dropdown-menu dropdown-menu-end" v-else>
                <li>
                  <router-link :to="{name: 'user.profile'}" class="dropdown-item">My Profile</router-link>
                </li>
                <li>
                  <router-link :to="{name: 'user.orders'}" class="dropdown-item">My Orders</router-link>
                </li>
                <li>
                  <router-link :to="{name: 'user.wishlist'}" class="dropdown-item">My Wishlist</router-link>
                </li>
                <li>
                  <button :disabled="loading" class="dropdown-item"  @click="userLogout">Logout
                    <span v-show="loading" class="spinner-border spinner-border-sm ms-1"></span>
                  </button>
                </li>
              </ul>
            </li>
            <router-link v-if="user.data" :to="{name: 'user.wishlist'}" class="header-widget" title="Wishlist"><i
                class="fas fa-heart"></i><sup>{{ user.meta.wishlists.length }}</sup></router-link>
            <button class="header-widget header-cart" @click="cartShow" title="Cartlist">
              <i class="fas fa-shopping-basket"></i><sup>{{ cartItemsCount }}</sup><span>total price<small>{{ $filters.currencySymbol(cartTotal) }}</small></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<style>
.hover-nav .nav-item .dropdown-menu {
  display: none;
  margin-top: 0;
}
.hover-nav .nav-item:hover .dropdown-menu {
  display: block;
}
</style>
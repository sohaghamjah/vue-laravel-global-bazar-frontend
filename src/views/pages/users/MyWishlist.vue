<script setup>
import { userAuth, useWishlist, useNotification, useCart } from '@/stores';
import { storeToRefs } from 'pinia';
import { ProductPrice } from '@/components';
import { onMounted, ref } from 'vue'

const auth = userAuth();
const wishlist = useWishlist();
const notify = useNotification();
const { user } = storeToRefs(auth);
const cart     = useCart();
const price    = ref();

// Wishlist Get

onMounted(() => {
    wishlist.getWishlists();
});

// Wishlist Remove

const destroyWishlist = async (product) => {
  let res = await wishlist.addToWishlist(product);

  if (res.status === 200) {
    notify.notificationElement('success', `${product.name} Remove From Your Wishlist`)
  } 
}

// Add To Cart
function addToCart(product) {
    if (product.discount) {
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

</script>

<template>
  <div>
    <div>
      <section class="inner-section single-banner">
        <div class="container">
          <h2>wishlist</h2>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="index.html">My Wishlist</a>
            </li>
          </ol>
        </div>
      </section>
      <section class="inner-section wishlist-part">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="table-scroll">
                <table class="table-list">
                  <thead>
                    <tr>
                      <th scope="col">Serial</th>
                      <th scope="col">Product</th>
                      <th scope="col">Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">shopping</th>
                      <th scope="col">action</th>
                    </tr>
                  </thead>
                  <tbody v-if="user.meta.wishlists">
                    <tr v-for="(product, index) in user.meta.wishlists" :key="index">
                      <td class="table-serial"><h6>1</h6></td>
                      <td class="table-image">
                        <img
                          :src="$filters.makeImagePath(product.thumbnail)"
                          alt="product"
                        />
                      </td>
                      <td class="table-name"><h6>{{ product.name }}</h6></td>
                      <td class="table-price">
                        <ProductPrice :product="product" />
                      </td>
                      <td class="table-shop">
                        <button class="product-add" @click.prevent="addToCart(product)" title="Add to Cart">
                          add to cart</button
                        ><!-- fas fa-spinner fa-spin -->
                      </td>
                      <td class="table-action">
                        <a
                          class=""
                          href="javascript::void(0)"
                          title="Remove Wishlist"
                          @click.prevent="destroyWishlist(product)"
                          >
                          <i class="fa fa-spinner fa-spin delete_icon" v-if="wishlist.loading == product.id" aria-hidden="true"></i>
                          <i class="icofont-trash delete_icon" v-else></i
                        ></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="text-center mt-5">
                <button class="btn btn-outline">Load more items</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
  .delete_icon{
    color: #ff3838;
  }
</style>


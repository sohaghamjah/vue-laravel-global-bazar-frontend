<script setup>
import { userAuth, useWishlist, useNotification } from '@/stores';
import { storeToRefs } from 'pinia';
import { ProductPrice } from '@/components';

const auth = userAuth();
const wishlist = useWishlist();
const notify = useNotification();
const { user } = storeToRefs(auth);

// Wishlist Remove

const destroyWishlist = async (product) => {
  let res = await wishlist.addToWishlist(product);

  if (res.status === 200) {
    notify.notificationElement('success', `${product.name} Remove From Your Wishlist`)
  } 
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
                        <button class="product-add" title="Add to Cart">
                          add to cart</button
                        ><!-- fas fa-spinner fa-spin -->
                      </td>
                      <td class="table-action">
                        <a
                          class=""
                          href="javascript::void(0)"
                          title="Remove Wishlist"
                          @click.prevent="destroyWishlist(product)"
                          ><i class="icofont-trash"></i
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


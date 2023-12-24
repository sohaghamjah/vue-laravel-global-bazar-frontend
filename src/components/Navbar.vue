<script setup>
  const props = defineProps({
    navCategories:{
      type: Object,
      required: true,
    }
  })
</script>
<template>
    <nav class="navbar-part">
      <div class="container">
          <div class="row">
            <div class="col-lg-12">
                <div class="navbar-content">
                  <ul class="navbar-list">
                      <li class="navbar-item dropdown">
                        <router-link :to="{name: 'home'}" class="navbar-link">Home</router-link>
                      </li>
                      <li class="navbar-item dropdown-megamenu">
                        <a class="navbar-link dropdown-arrow" href="#">Categories</a>
                        <div class="megamenu">
                            <div class="container">
                              <div class="row row-cols-5">
                                  <div class="col" v-for="(category, index) in navCategories.data" :key="index">
                                    <div class="megamenu-wrap">
                                      <router-link :to="{
                                          name: 'shop',
                                          query: {products: category.slug}
                                        }"
                                      >
                                        <h5 class="megamenu-title">{{ category.name }}</h5>
                                      </router-link>
                                        <ul class="megamenu-list" v-if="category.subcategories.length > 0">
                                          <li v-for="(sub_cat, sub_cat_index) in category.subcategories" :key="sub_cat_index">
                                            <router-link :to="{
                                                name: 'shop',
                                                query: {products: sub_cat.slug}
                                              }">
                                              {{ sub_cat.name }}
                                            </router-link>
                                           </li>
                                        </ul>
                                    </div>
                                  </div>
                              </div>
                            </div>
                        </div>
                      </li>
                      <li class="navbar-item dropdown-megamenu">
                        <router-link class="navbar-link" :to="{name: 'shop'}">Shop</router-link>
                      </li>
                      <li class="navbar-item dropdown-megamenu">
                        <router-link class="navbar-link" :to="{name: 'seller'}">Seller List</router-link>
                      </li>
                  </ul>
                </div>
            </div>
          </div>
      </div>
    </nav> 
</template>
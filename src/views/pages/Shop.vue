<script setup>
    import { useShop } from '@/stores';
    import { onMounted, ref } from 'vue';
    import { storeToRefs } from 'pinia';
    import { productCard } from '@/components';
    import { ProductSkeleton } from "@/components/skeleton";
    import { Bootstrap5Pagination } from 'laravel-vue-pagination';


    const shop = useShop();
    const { products } = storeToRefs(shop);

    const show = ref(24);
    const sort = ref('default');

    onMounted(() => {
        getProducts();
    });

    const getProducts = (page = 1) => {
        shop.$reset(); 
        shop.getProducts(page, show.value, sort.value);
    }

</script>
<template>
  <div>
      <section class="inner-section single-banner" style="background: url(@/images/single-banner.jpg) no-repeat center">
          <div class="container">
              <h2>Shop Page</h2>
          </div>
      </section>
      <section class="inner-section shop-part">
          <div class="container">
              <div class="row content-reverse">
                  <div class="col-lg-3">
                      <!-- <div class="shop-widget-promo">
                            <a href="#"><img src="@/images/promo/shop/01.jpg" alt="promo" /></a>
                        </div> -->
                      <div class="shop-widget">
                          <h6 class="shop-widget-title">Filter by Price</h6>
                          <form>
                              <div class="shop-widget-group">
                                  <input type="text" placeholder="Min - 00" /><input type="text"
                                      placeholder="Max - 5k" />
                              </div>
                              <button class="shop-widget-btn">
                                  <i class="fas fa-search"></i><span>search</span>
                              </button>
                          </form>
                      </div>

                      <div class="shop-widget">
                          <h6 class="shop-widget-title">Filter by Brand</h6>
                          <form>
                              <input class="shop-widget-search" type="text" placeholder="Search..." />
                              <ul class="shop-widget-list shop-widget-scroll">
                                  <li>
                                      <div class="shop-widget-content">
                                          <input type="checkbox" id="brand1" /><label for="brand1">mari gold</label>
                                      </div>
                                      <span class="shop-widget-number">(13)</span>
                                  </li>
                                  <li>
                                      <div class="shop-widget-content">
                                          <input type="checkbox" id="brand2" /><label for="brand2">tredar</label>
                                      </div>
                                      <span class="shop-widget-number">(28)</span>
                                  </li>
                                  <li>
                                      <div class="shop-widget-content">
                                          <input type="checkbox" id="brand3" /><label for="brand3">keya</label>
                                      </div>
                                      <span class="shop-widget-number">(35)</span>
                                  </li>
                                  <li>
                                      <div class="shop-widget-content">
                                          <input type="checkbox" id="brand4" /><label for="brand4">diamond</label>
                                      </div>
                                      <span class="shop-widget-number">(47)</span>
                                  </li>
                                  <li>
                                      <div class="shop-widget-content">
                                          <input type="checkbox" id="brand5" /><label for="brand5">lilly's</label>
                                      </div>
                                      <span class="shop-widget-number">(59)</span>
                                  </li>
                                  <li>
                                      <div class="shop-widget-content">
                                          <input type="checkbox" id="brand6" /><label for="brand6">fremant</label>
                                      </div>
                                      <span class="shop-widget-number">(64)</span>
                                  </li>
                                  <li>
                                      <div class="shop-widget-content">
                                          <input type="checkbox" id="brand7" /><label for="brand7">avocads</label>
                                      </div>
                                      <span class="shop-widget-number">(77)</span>
                                  </li>
                                  <li>
                                      <div class="shop-widget-content">
                                          <input type="checkbox" id="brand8" /><label for="brand8">boroclas</label>
                                      </div>
                                      <span class="shop-widget-number">(85)</span>
                                  </li>
                              </ul>
                              <button class="shop-widget-btn">
                                  <i class="far fa-trash-alt"></i><span>clear filter</span>
                              </button>
                          </form>
                      </div>
                      <div class="shop-widget">
                          <h6 class="shop-widget-title">Filter by Category</h6>
                          <form>
                              <input class="shop-widget-search" type="text" placeholder="Search..." />
                              <ul class="shop-widget-list shop-widget-scroll">
                                  <li>
                                      <div class="shop-widget-content">
                                          <input type="checkbox" id="cate1" /><label for="cate1">vegetables</label>
                                      </div>
                                      <span class="shop-widget-number">(13)</span>
                                  </li>
                                  <li>
                                      <div class="shop-widget-content">
                                          <input type="checkbox" id="cate2" /><label for="cate2">groceries</label>
                                      </div>
                                      <span class="shop-widget-number">(28)</span>
                                  </li>
                                  <li>
                                      <div class="shop-widget-content">
                                          <input type="checkbox" id="cate3" /><label for="cate3">fruits</label>
                                      </div>
                                      <span class="shop-widget-number">(35)</span>
                                  </li>
                                  <li>
                                      <div class="shop-widget-content">
                                          <input type="checkbox" id="cate4" /><label for="cate4">dairy farm</label>
                                      </div>
                                      <span class="shop-widget-number">(47)</span>
                                  </li>
                                  <li>
                                      <div class="shop-widget-content">
                                          <input type="checkbox" id="cate5" /><label for="cate5">sea foods</label>
                                      </div>
                                      <span class="shop-widget-number">(59)</span>
                                  </li>
                                  <li>
                                      <div class="shop-widget-content">
                                          <input type="checkbox" id="cate6" /><label for="cate6">diet foods</label>
                                      </div>
                                      <span class="shop-widget-number">(64)</span>
                                  </li>
                                  <li>
                                      <div class="shop-widget-content">
                                          <input type="checkbox" id="cate7" /><label for="cate7">dry foods</label>
                                      </div>
                                      <span class="shop-widget-number">(77)</span>
                                  </li>
                                  <li>
                                      <div class="shop-widget-content">
                                          <input type="checkbox" id="cate8" /><label for="cate8">fast foods</label>
                                      </div>
                                      <span class="shop-widget-number">(85)</span>
                                  </li>
                                  <li>
                                      <div class="shop-widget-content">
                                          <input type="checkbox" id="cate9" /><label for="cate9">drinks</label>
                                      </div>
                                      <span class="shop-widget-number">(92)</span>
                                  </li>
                                  <li>
                                      <div class="shop-widget-content">
                                          <input type="checkbox" id="cate10" /><label for="cate10">coffee</label>
                                      </div>
                                      <span class="shop-widget-number">(21)</span>
                                  </li>
                                  <li>
                                      <div class="shop-widget-content">
                                          <input type="checkbox" id="cate11" /><label for="cate11">meats</label>
                                      </div>
                                      <span class="shop-widget-number">(14)</span>
                                  </li>
                                  <li>
                                      <div class="shop-widget-content">
                                          <input type="checkbox" id="cate12" /><label for="cate12">fishes</label>
                                      </div>
                                      <span class="shop-widget-number">(56)</span>
                                  </li>
                              </ul>
                              <button class="shop-widget-btn">
                                  <i class="far fa-trash-alt"></i><span>clear filter</span>
                              </button>
                          </form>
                      </div>
                  </div>
                  <div class="col-lg-9">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="top-filter">
                                    <div class="filter-show">
                                        <label class="filter-label">Show :</label>
                                        <select class="form-select filter-select"
                                            v-model="show" 
                                            @change="getProducts"
                                        >
                                            <option value="24">24</option>
                                            <option value="36">36</option>
                                            <option value="50">50</option>
                                            <option value="75">75</option>
                                            <option value="100">100</option>
                                        </select>
                                    </div>
                                    <div class="filter-short">
                                        <label class="filter-label">Short by :</label>
                                        <select class="form-select filter-select"
                                            v-model="sort" 
                                            @change="getProducts"
                                        >
                                        <option value="default">default</option>
                                        <option value="new">New</option>
                                        <option value="popular">Popular</option>
                                        <option value="winter">Winter</option>
                                        <option value="feature">Feature</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4">
                            <template v-if="products.data">
                                <productCard :product="product" v-for="(product, index) in products.data" :key="index"/>
                            </template>
                            <template v-else>
                                <ProductSkeleton :dataAmount="24" />
                            </template>
                        </div>

                        <div class="row"  v-if="products.meta">
                            <div class="col-lg-12">
                                <div class="bottom-paginate">
                                    <p class="page-info" >Showing {{ products.meta.per_page > products.meta.total ? products.meta.total : products.meta.per_page  }} of {{ products.meta.total }} Results</p>
                                    <ul class="pagination">
                                        <Bootstrap5Pagination
                                            :data="products"
                                            @pagination-change-page="getProducts"
                                        >
                                            <template #prev-nav>
                                                <a class="page-link" href="#"
                                                ><i class="fas fa-long-arrow-alt-left"></i
                                                ></a>
                                            </template>
                                            <template #next-nav>
                                                <a class="page-link" href="#"
                                                ><i class="fas fa-long-arrow-alt-right"></i
                                                ></a>
                                            </template>

                                        </Bootstrap5Pagination>
                                    </ul>
                                </div>
                            </div>
                        </div>
                  </div>
              </div>
          </div>
      </section>
  </div>
</template>

<style>

</style>
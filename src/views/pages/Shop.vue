<script setup>
    import { useShop } from '@/stores';
    import { onMounted, ref, computed } from 'vue';
    import { storeToRefs } from 'pinia';
    import { productCard } from '@/components';
    import { ProductSkeleton, ShopSidebarSkeleton } from "@/components/skeleton";
    import { Bootstrap5Pagination } from 'laravel-vue-pagination';


    const shop = useShop();
    const { products, sidebar_data } = storeToRefs(shop);

    const show = ref(24);
    const sort = ref('default');

    onMounted(() => {
        getProducts();
        shop.shopSidebar();
    });

    const getProducts = (page = 1) => {
        products.value = [],
        shop.getProducts(page, show.value, sort.value);
    }

    const searchBrandText = ref('');
    const searchCategoryText = ref('');

    // Brand And Category Search

    const searchBrandData =  computed(() => {
        return shop.sidebar_data.data.brands.filter((brand) => {
            return brand.name.toLowerCase().match(searchBrandText.value.toLowerCase());
        })
    });

    const searchCategoryData = computed(() => {
        return shop.sidebar_data.data.categories.filter((category) => {
            return category.name.toLowerCase().match(searchCategoryText.value.toLowerCase());
        })
    });

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

                    <template v-if="sidebar_data.data">
                        <div class="shop-widget">
                            <h6 class="shop-widget-title">Filter by Price</h6>
                            <form>
                                <div class="shop-widget-group">
                                    <input type="text" :placeholder="`Min - ${$filters.currencySymbol((sidebar_data.data.price.min_price))}`" /><input type="text"
                                        :placeholder="`Max - ${$filters.currencySymbol((sidebar_data.data.price.max_price))}`" />
                                </div>
                                <button class="shop-widget-btn">
                                    <i class="fas fa-search"></i><span>search</span>
                                </button>
                            </form>
                        </div>

                        <div class="shop-widget">
                            <h6 class="shop-widget-title">Filter by Brand</h6>
                            <form>
                                <input class="shop-widget-search" type="text" placeholder="Search..." v-model="searchBrandText" />
                                <ul class="shop-widget-list shop-widget-scroll">
                                    <li v-for="brand in searchBrandData"  :key="brand.id">
                                        <div class="shop-widget-content">
                                            <input type="checkbox" id="brand1" /><label for="brand1">{{ brand.name }}</label>
                                        </div>
                                        <span class="shop-widget-number">({{ brand.products_count }})</span>
                                    </li>
                                    <li v-if="searchBrandData.length == 0" class="text-center">
                                            <p class="text-danger">No Result Found!</p>
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
                                <input class="shop-widget-search" type="text" placeholder="Search..." v-model="searchCategoryText"/>
                                <ul class="shop-widget-list shop-widget-scroll">
                                    <li v-for="category in searchCategoryData" :key="category.id">
                                        <div class="shop-widget-content">
                                            <input type="checkbox" id="cate1" /><label for="cate1">{{ category.name }}</label>
                                        </div>
                                        <span class="shop-widget-number">({{ category.products_count }})</span>
                                        </li>

                                        <li class="text-center" v-if="searchCategoryData.length == 0">
                                            <p class="text-danger">No Result Found!</p>
                                        </li>
                                </ul>
                                <button class="shop-widget-btn">
                                    <i class="far fa-trash-alt"></i><span>clear filter</span>
                                </button>
                            </form>
                        </div>
                    </template>

                    <template v-else>
                        <ShopSidebarSkeleton />
                    </template>

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
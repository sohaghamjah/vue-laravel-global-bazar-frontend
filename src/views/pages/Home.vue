<script setup>
    import { ref, onMounted } from "vue";
    import { useSlider, useCategory, useProduct } from "@/stores"
    import { storeToRefs } from "pinia";
    import { productCard, ProductPrice } from '@/components';
    import { 
        BannerSliderSkeleton, 
        CategorySkeleton, 
        ProductSkeleton ,
        ProductSliderSkeleton
    } from "@/components/skeleton";
    import { Swiper, SwiperSlide } from "swiper/vue";
    import { Autoplay, Pagination, Navigation } from "swiper";
import { data } from "dom7";
    const modules = ref([Autoplay, Pagination]);
    const newSlide = ref([Autoplay, Navigation]);

    // Slider Get
    const slider = useSlider();
    const category = useCategory();
    const product = useProduct();

    const { products, popular, sold, winter, newProducts } = storeToRefs(product);
    const { sliders } = storeToRefs(slider);
    const { categories } = storeToRefs(category);


    onMounted(() => {
        slider.getSliders();
        category.getCategories();
        product.getProducts();
        product.getProducts('popular');
        product.getProducts('sale');
        product.getProducts('winter');
        product.getProducts('new');
    })

</script>
<template>
    <div>
        <section class="banner-part">
            <div class="">
                <div class="row">
                    <div class="col-lg-12 order-0 order-lg-1 order-xl-1">
                        <div class="home-grid-slider slider-arrow slider-dots">
                            <template v-if="sliders.data">
                                <swiper 
                                    :spaceBetween="30"
                                    :pagination="{
                                    clickable: true,
                                    }"
                                    :loop="true"
                                    :autoplay="{
                                        delay: 2000,
                                    }"
                                    :modules="modules"
                                    class="mySwiper"
                                    >
                                    <swiper-slide v-for="(slider, index) in sliders.data" :key="index">
                                        <a href="#"><img :src="$filters.makeImagePath(slider.image)" alt="" /></a>
                                    </swiper-slide>
                                </swiper>
                            </template>
                            <template v-else>
                                <BannerSliderSkeleton />
                            </template>
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section suggest-part">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-heading">
                            <h3 style="float: left">SHOP BY CATEGORIES</h3>
                        </div>
                    </div>
                </div>

                <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                    <template v-if="categories.data">
                        <div class="col" v-for="(category, index) in categories.data" :key="index">
                            <div class="product-card">
                                <ul>
                                    <li>
                                        <a class="suggest-card" href="shop-4column.html">
                                            <img :src="$filters.makeImagePath(category.image)" alt="" />
                                        </a>
                                    </li>
                                </ul>
                                <h6 class="text-center mt-2">{{ category.name }}</h6>
                            </div>
                        </div>
                    </template>

                    <template v-else>
                        <CategorySkeleton :dataAmount="10" />
                    </template>
                </div>
            </div>
        </section>

        <section class="section recent-part">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-heading"> 
                            <h2>All Products</h2>
                        </div>
                    </div>
                </div>
                <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                    <template v-if="products.data">
                        <productCard :product="product" v-for="(product, index) in products.data" :key="index"/>
                    </template>
                    <template v-else>
                        <ProductSkeleton :dataAmount="10" />
                    </template>
                </div>
              
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-btn-25">
                            <a href="shop-4column.html" class="btn btn-outline"><i class="fas fa-eye"></i><span>show
                                    more</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section recent-part">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-heading">
                            <h2>Popular items</h2>
                        </div>
                    </div>
                </div>
                <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                    <template v-if="popular.data">
                        <productCard :product="product" v-for="(product, index) in popular.data" :key="index"/>
                    </template>
                    <template v-else>
                        <ProductSkeleton :dataAmount="10" />
                    </template>
                </div>
                    
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-btn-25">
                            <a href="shop-4column.html" class="btn btn-outline"><i class="fas fa-eye"></i><span>show
                                    more</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section recent-part">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-heading">
                            <h2>Sold items</h2>
                        </div>
                    </div>
                </div>
                <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                    <template v-if="sold.data">
                        <productCard :product="product" v-for="(product, index) in sold.data" :key="index"/>
                    </template>
                    <template v-else>
                        <ProductSkeleton :dataAmount="10" />
                    </template>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-btn-25">
                            <a href="shop-4column.html" class="btn btn-outline"><i class="fas fa-eye"></i><span>show
                                    more</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section recent-part">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-heading">
                            <h2>Winter Products</h2>
                        </div>
                    </div>
                </div>
                <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                    <template v-if="winter.data">
                        <productCard :product="product" v-for="(product, index) in winter.data" :key="index"/>
                    </template>
                    <template v-else>
                        <ProductSkeleton :dataAmount="10" />
                    </template>
                </div>
                
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-btn-25">
                            <a href="shop-4column.html" class="btn btn-outline"><i class="fas fa-eye"></i><span>show
                                    more</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section newitem-part">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="section-heading">
                            <h2>collected new items</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <ul class="new-slider slider-arrow">
                            <template v-if="newProducts.data">
                                <swiper
                                    :slidesPerView="5"
                                    :spaceBetween="0"
                                    :slidesPerGroup="1"
                                    :loop="true"
                                    :autoplay="{
                                        delay: 2000
                                    }"
                                    :loopFillGroupWithBlank="true"
                                    :navigation="true"
                                    :modules="newSlide"
                                    class="mySwiper"
                                >
                                    
                                <swiper-slide v-for="(product, index) in newProducts.data" :key="index">
                                    <li>
                                        <div class="product-card">
                                                <div class="product-media">
                                                    <div class="product-label">
                                                        <label class="label-text sale" v-if="product.discount">{{ product.discount }}%</label>
                                                        <label class="label-text new">{{ product.conditions }}</label>
                                                    </div>
                                                    <button class="product-wish wish">
                                                        <i class="fas fa-heart"></i></button>
                                                        <router-link class="product-image" :to="{name: 'product.details'}">
                                                            <img :src="$filters.makeImagePath(product.thumbnail)"
                                                            alt="product" />
                                                        </router-link>
                                                </div>
                                                <div class="product-content">
                                                    <h6 class="product-name">
                                                        <a href="product-video.html">{{ product.name }}</a>
                                                    </h6>
                                                    <ProductPrice :product="product"/>
                                                    <button class="product-add" title="Add to Cart">
                                                        <i class="fas fa-shopping-basket"></i><span>Add</span>
                                                    </button>
                                                </div>
                                        </div>
                                    </li>
                                </swiper-slide>
                                
                                </swiper> 
                            </template>

                            <template v-else>
                                <ProductSliderSkeleton></ProductSliderSkeleton>
                            </template>
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="section-btn-25">
                            <a href="shop-4column.html" class="btn btn-outline"><i class="fas fa-eye"></i><span>show
                                    more</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
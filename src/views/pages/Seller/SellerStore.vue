<script setup>
    import  { useRoute } from 'vue-router';
    import { useSeller } from '@/stores';
    import { onMounted } from 'vue';
    import { storeToRefs } from 'pinia';
    import { productCard } from '@/components';
    import { ProductSkeleton } from "@/components/skeleton";

    const seller = useSeller();
    const route = useRoute();

    const { seller_store } = storeToRefs(seller);

    onMounted(() => {
        seller.sellerProductBySlug(route.params.slug);
    })

</script>
<template>
    <div v-if="seller_store.data">
        <section class="single-banner" style="
          background: url('//website/images/single-banner.jpg') center center
            no-repeat;
        ">
            <div class="container">
                <h2>Seller Products</h2>
            </div>
        </section>
        <div class="brand-single text-center">
            <a href="#">
                <div>
                    <img class="single_store_img" :src="$filters.makeImagePath(seller_store.data.image)"
                        alt="product" />
                </div>
            </a>
            <a href="#">
                <h3>{{ seller_store.data.shop_name }}</h3>
            </a>
        </div>
        <section class="inner-section shop-part">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="top-filter">
                            <div class="filter-show">
                                <label class="filter-label">Show :</label><select class="form-select filter-select">
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                    <option value="30">30</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                </select>
                            </div>
                            <div class="filter-short">
                                <label class="filter-label">Short by :</label><select class="form-select filter-select">
                                    <option value="">default</option>
                                    <option value="new">New</option>
                                    <option value="popular">Popular</option>
                                    <!-- <option value="winter">Winter</option> -->
                                    <option value="feature">Feature</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                    <template v-if="seller_store.data">
                        <productCard :product="product" v-for="(product, index) in seller_store.data.products" :key="index"/>
                    </template>
                    <template v-else>
                        <ProductSkeleton :dataAmount="10" />
                    </template>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
    .single_store_img{
        width: 200px;
        height: 200px;
        border-radius: 50%;
        margin-top: -100px;
    }
    .brand-single a{
        display: block;
    }
    .brand-single {
        z-index: 9;
    }
</style>

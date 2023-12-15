<template>
        <section class="single-banner">
            <div class="container">
                <h2>Seller Products</h2>
            </div>
        </section>
        <div class="brand-single text-center mb-4">
            <a href="#">
                <div>
                    <img class="single_store_img" src="@/assets/images/category/cat.jpg"
                        alt="product" />
                </div>
            </a>
            
            <h3 style="width: 250px; margin: 0 auto"><div class="ssc-line" ></div></h3>
            
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
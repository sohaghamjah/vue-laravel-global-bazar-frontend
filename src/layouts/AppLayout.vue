<script setup>
    import {
        Header,
        Navbar,
        CartSidebar,
        MobileSidebar,
        NewsLetter,
        Footer,
        LoginModal
        } 
    from '@/components';
</script>

<template>
    <div>
        <div class="backdrop"></div>
        <a class="backtop fas fa-arrow-up" href="#"></a>
        
        <!-- Header Part -->
        <Header/>
        <!-- Navbar -->
        <Navbar :navCategories="navCategories"/>
        <!-- Cart Sidebar -->
        <CartSidebar />

        <!-- Cart Sidebar, Nav Sidebar, Mobile menu -->

        <MobileSidebar />

        <LoginModal />

        <slot />

         <!-- Newsletter -->

        <NewsLetter />
        <Footer />

    </div>
</template>

<style scoped>

</style>
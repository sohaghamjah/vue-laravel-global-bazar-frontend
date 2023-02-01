<template>
  <div>
    <div class="backdrop"></div>
    <a class="backtop fas fa-arrow-up" href="#"></a>
    
    <!-- Header Part -->
    <Header />
    <!-- Navbar -->
    <Navbar />
    <!-- Cart Sidebar -->
    <CartSidebar />

    <!-- Cart Sidebar, Nav Sidebar, Mobile menu -->

    <MobileSidebar />

    <router-view></router-view>


    <!-- Newsletter -->

    <NewsLetter />
    <Footer />
    
  </div>
</template>

<script setup>
  import {
      Header,
      Navbar,
      CartSidebar,
      MobileSidebar,
      NewsLetter,
      Footer
    } 
  from '@/components';
</script>
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

    <LoginModal />

    <!-- From Router Call -->
    <router-view v-slot="{ Component }">
        <transition name="fade" mode="fade-out">
          <component :is="Component" />
        </transition>
    </router-view>

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
      Footer,
      LoginModal
    } 
  from '@/components';
</script>


<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
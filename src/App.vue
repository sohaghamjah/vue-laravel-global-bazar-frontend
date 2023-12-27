<script setup>
  import AppLayout from '@/layouts/AppLayout.vue';
</script>

<template>
  <div>
   
    <AppLayout>
      <!-- From Router Call -->
      <router-view v-slot="{ Component }">
          <transition name="fade" mode="fade-out">
            <component :is="Component" />
          </transition>
      </router-view>
    </AppLayout>

   
  </div>
</template>


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
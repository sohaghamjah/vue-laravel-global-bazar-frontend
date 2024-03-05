<script setup>
  import { ref } from 'vue';
  defineProps(['category'])

  const status = ref(false);
  const toggle = () => {
    status.value =!status.value;
  }
</script>
<template>
  <li class="category-item" @click="toggle">
    <a class="category-link dropdown-link" href="#"><i class="flaticon-vegetable"></i><span>{{ category }}</span></a>
    <ul class="dropdown-list" style="display: block;" v-show="status">
      <slot />
    </ul>
</li>
</template>
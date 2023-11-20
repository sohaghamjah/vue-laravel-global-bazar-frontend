<script setup>
   const props = defineProps({
      dataAmount:{
         type: Number,
         required: true,
         default: 10,
      }
   })
</script>

<template>
    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
        <div class="col mb-4 " v-for="(product, index) in dataAmount" :key="index">
            <div class="ssc ssc-card" style="max-width: 300px">
                <div class="ssc-wrapper">
                    <div class="ssc-square mb"></div>
                    <div class="flex align-center justify-between">
                        <div class="w-40">
                            <div class="ssc-line w-70 mbs"></div>
                            <div class="ssc-line w-100 mbs"></div>
                        </div>
                        <div class="ssc-head-line w-50"></div>
                    </div>
                </div>
                <div class="ssc-hr"></div>
                <div class="ssc-hr"></div>
                <div class="ssc-wrapper">
                    <div class="ssc-head-line"></div>
                </div>
            </div>
        </div>
    </div>
</template>
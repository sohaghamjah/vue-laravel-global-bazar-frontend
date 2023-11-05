<script setup>
import { computed } from "vue";

    const props = defineProps({
        product:{
            type: Object,
            required: true,
        },
    });

    const discountPrice = computed(() => {
        var price = props.product.price;
        var discount = (props.product.discount * props.product.price) / 100;
        var total_price = price - discount;

        return total_price.toFixed();
    })
</script>

<template>
      <h6 class="product-price" v-if="product.discount">
            <del>{{ $filters.currencySymbol(product.price) }}</del><span>{{ $filters.currencySymbol(discountPrice) }}<small></small></span>
        </h6>
        <h6 class="product-price" v-else>
            <span>{{ $filters.currencySymbol(product.price) }}<small></small></span>
        </h6>
</template>
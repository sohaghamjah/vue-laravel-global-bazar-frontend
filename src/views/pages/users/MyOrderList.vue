<script setup>
  import { useOrder } from '@/stores';
  import { onMounted } from 'vue';
  import { storeToRefs } from 'pinia';

  const order = useOrder();
  const orders = storeToRefs(order);

  onMounted(() => {
    order.index();
  })
</script>

<template>
   <div>
     <section class="inner-section single-banner">
       <div class="container">
         <h2>Order List</h2>
         <ol class="breadcrumb">
           <li class="breadcrumb-item"><a href="index.html">My Orders</a></li>
         </ol>
       </div>
     </section>
     <section class="inner-section wishlist-part">
       <div class="container">
         <div class="row">
           <div class="col-lg-12">
             <div class="table-scroll">
              <table style="width: 100%;">
              <thead>
                  <tr>
                    <th scope="col">Serial</th>
                    <th scope="col">Order Id</th>
                    <th scope="col">Address</th>
                    <th scope="col">Subtotal</th>
                    <th scope="col">discount</th>
                    <th scope="col">Total</th>
                    <th scope="col">action</th>
                  </tr>
              </thead>
              <tbody>
                <tr v-for="(order, index) in order.orders" :key="index">
                  <td class="table-serial">
                    <h6>{{ ++index }}</h6>
                  </td>
                  <td class="table-image">#{{ order.order_number }}</td>
                  <td class="table-name">
                    <h6>{{ order.shipping_address }}</h6>
                  </td>
                  <td class="table-price">
                    {{ $filters.currencySymbol(order.subtotal) }}
                  </td>
                  <td class="table-price">
                    {{ $filters.currencySymbol(order.discount) }}
                  </td>

                  <td class="table-price">
                    {{ $filters.currencySymbol(order.total) }}
                  </td>
                  <td class="table-shop">
                    <!-- <RouterLink
                      :to="{
                        name: 'order.details',
                        params: { id: order.id },
                      }"
                      class="product-add"
                      title="Add to Cart"
                    >
                      Details</RouterLink
                    > -->
                  </td>
                </tr>
              </tbody>
              </table>
             </div>
           </div>
         </div>
         <div class="row">
           <div class="col-lg-12">
             <div class="text-center mt-5">
               <button class="btn btn-outline">Load more Orders</button>
             </div>
           </div>
         </div>
       </div>
     </section>
   </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
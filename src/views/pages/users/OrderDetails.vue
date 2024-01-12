<script setup>
  import { useOrder } from '@/stores';
  import { onMounted } from 'vue';
  import { Loader } from '@/components';
  import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';

  const route = useRoute();
  const order = useOrder();

  const { orderDetails } = storeToRefs(order);

  onMounted(() => {
    order.getOrderDetails(route.params.id);
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
            <Loader v-if="order.loading" />
            <div class="orderlist" v-else>
              <div class="orderlist-head">
                <h5>order# {{ orderDetails.order_number }}</h5>
              </div>
              <div class="orderlist-body">
                <div class="row">
                  <div class="col-lg-5">
                    <ul class="orderlist-details">
                      <li>
                        <h6>order id</h6>
                        <p>{{ orderDetails.order_number }}</p>
                      </li>
                      <li>
                        <h6>Total Item</h6>
                        <p>{{ orderDetails.items?.length }} Items</p>
                      </li>
                      <li>
                        <h6>Order Time</h6>
                        <p>
                          {{ orderDetails.created_at }}
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-4">
                    <ul class="orderlist-details">
                      <li>
                        <h6>Sub Total</h6>
                        <p>
                          {{
                            $filters.currencySymbol(
                              orderDetails.subtotal ?? 0
                            )
                          }}
                        </p>
                      </li>
                      <li>
                        <h6>discount</h6>
                        <p>
                          {{
                            $filters.currencySymbol(
                              orderDetails.discount ?? 0
                            )
                          }}
                        </p>
                      </li>
                      <li>
                        <h6>delivery fee</h6>
                        <p>
                          {{
                            $filters.currencySymbol(orderDetails.charges ?? 0)
                          }}
                        </p>
                      </li>
                      <li>
                        <h6>Total<small>(Incl. VAT)</small></h6>
                        <p>
                          {{
                            $filters.currencySymbol(orderDetails.total ?? 0)
                          }}
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-3">
                    <div class="orderlist-deliver">
                      <h6>Delivery location</h6>
                      <p>
                        {{ orderDetails.shipping_address }}
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-12" v-if="orderDetails?.items?.length">
                    <div class="table-scroll">
                      <table class="table-list">
                        <thead>
                          <tr>
                            <th scope="col">Serial</th>
                            <th scope="col">Product</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">quantity</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item, index) in orderDetails?.items" :key="index">
                            <td class="table-serial">
                              <h6>{{ ++index }}</h6>
                            </td>
                            <td class="table-image">
                              <img
                                :src="
                                  $filters.makeImagePath(
                                    item.product?.thumbnail
                                  )
                                "
                                alt="product"
                              />
                            </td>
                            <td class="table-name">
                              <h6>{{ item.product?.name }}</h6>
                            </td>
                            <td class="table-price">
                              <h6>{{ item.price }}</h6>
                            </td>
                            <td class="table-quantity">
                              <h6>{{ item.qty }}</h6>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
     </section>
   </div>
</template>

<style scoped>
  @import url('@/assets/css/orderlist.css');
</style>
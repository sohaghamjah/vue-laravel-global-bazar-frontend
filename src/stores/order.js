import axiosInstance from "@/services/axiosService";
import { defineStore, storeToRefs } from "pinia";
import { useCart, useAddress, useCoupon, useNotification } from "@/stores";
import { useRouter } from 'vue-router';

export const useOrder = defineStore("order", {
    state: () => ({
        orders: {},
        loading: false,
    }),
    actions:{
        async index(){
            this.loading = true;
            try {
                let response = await axiosInstance.get("user/my/orders");
                if(response.status == 200){
                    this.orders = response.data.data;
                }
            } catch (error) {
                if (error.response) {
                    return Promise.resolve(error.response.data.errors);
                }
            } finally {
                this.loading = false;
            }
        },
        async placeOrder(){
            const cart = useCart();
            const address = useAddress();
            const coupon = useCoupon();

            try {
                let response = await axiosInstance.post("user/place-order",{
                    sub_total : cart.cartTotal,
                    discount  : coupon.discount,
                    charge    : address?.user_address?.division?.charge,
                    total     : coupon.grandTotal,
                    cart_items: cart.cartItems,
                });
                if(response.status == 201){
                    cart.$reset();
                    return Promise.resolve(response.data);
                }
            } catch (error) {
                if (error.response) {
                    return Promise.resolve(error.response.data.erros);
                }
            }
        },
    },
})
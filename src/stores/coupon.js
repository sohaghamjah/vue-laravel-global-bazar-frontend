import axiosInstance from "@/services/axiosService";
import { defineStore } from "pinia";
import { useNotification, useCart, useAddress } from "@/stores";

export const useCoupon = defineStore("coupon", {
    state: () => ({
        data: {},
    }),
    getters: {
        discount: (state) => {
            const cart = useCart();
            console.log(state);
            if (state.data.type === "fixed") {
                return state.data.value;
            } else if (state.data.type === "percent") {
                return parseInt((state.data.value / 100) * cart.cartTotal);
            } else {
                return 0;
            }
        },
        grandTotal: (state) => {
            const cart = useCart();
            const address = useAddress();
            var charge = 0;
            if(address.user_address?.division){
                charge = address.user_address.division?.charge;
            }
            return parseInt((cart.cartTotal + charge) - state.discount);
        }
    } ,
    actions:{
        async apply(coupon_code){
            try {
                let response = await axiosInstance.post("/user/apply-coupon", {
                    coupon_code: coupon_code
                });
                if(response.status == 200){
                    this.data = response.data.data;
                    const notify = useNotification();
                    notify.notificationElement('success', "Coupon Applied Successful", 'success');
                }
            } catch (error) {
                if(error.response){
                    if(error.response.status == 404){
                        const notify = useNotification();
                        notify.notificationElement('error', "Invalid Coupon Code", 'error');
                        this.data = {};
                    }
                }
            }
        },
    },
})
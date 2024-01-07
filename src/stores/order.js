import axiosInstance from "@/services/axiosService";
import { defineStore } from "pinia";

export const useOrder = defineStore("order", {
    state: () => ({
        orders: {},
    }),
    actions:{
        async placeOrder(){
            try {
                let response = await axiosInstance.post("/place-order",{});

                console.log(response);

                // if(response.status == 200){
                //     this.categories = response.data;
                //     return new Promise((resolve) => {
                //         resolve(response.data);
                //     })
                // }
            } catch (error) {
              console.log(error);
            }
        },
    },
})
import axiosInstance from "@/services/axiosService";
import { defineStore } from "pinia";

export const useShop = defineStore("shop", {
    state: () => ({
        products: [],
    }),
    actions:{
        async getProducts(page, show, sort){
            try {
                let response = await axiosInstance.get(`/shop-products?page=${page}&show=${show}&sort=${sort}`);
                if(response.status == 200){
                    this.products = response.data;
                }
            } catch (error) {
              console.log(error);
            }
        }
    },
})
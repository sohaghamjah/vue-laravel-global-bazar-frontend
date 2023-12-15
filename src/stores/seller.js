import axiosInstance from "@/services/axiosService";
import { defineStore } from "pinia";

export const useSeller = defineStore("seller", {
    state: () => ({
        sellers: [],
        seller_store: {},
    }),
    actions:{
        async getSeller(page, show){
            try {
                let response = await axiosInstance.get(`/sellers?page=${page}&show=${show}`);
                if(response.status == 200){
                    this.sellers = response.data;
                    return new Promise((resolve) => {
                        resolve(response.data);
                    })
                }
            } catch (error) {
              console.log(error);
            }
        },

        async sellerProductBySlug(slug, page, show, sort){
            try {
                let response = await axiosInstance.get(`/seller/products/${slug}?page=${page}&show=${show}&sort=${sort}`);
                if(response.status == 200){
                    this.seller_store = response.data;
                }
            } catch (error) {
                console.log(error);
            }
        }
    },
})
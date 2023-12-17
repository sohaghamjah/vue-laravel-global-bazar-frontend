import axiosInstance from "@/services/axiosService";
import { defineStore } from "pinia";

export const useShop = defineStore("shop", {
    state: () => ({
        products: [],
        sidebar_data: [],
    }),
    actions:{
        async getProducts(page, show, sort, brands, categories, price_range){
            try {
                let response = await axiosInstance.get(`/shop-products`,{
                    params: {
                        page,
                        show,
                        sort,
                        brands,
                        categories,
                        price_range
                    }
                });
                if(response.status == 200){
                    this.products = response.data;
                }
            } catch (error) {
              console.log(error);
            }
        },

        async shopSidebar(){
            try {
                let response = await axiosInstance.get('shop-sidebar');
                if(response.data){
                    this.sidebar_data = response.data;
                }
            } catch (error) {
                console.log(error)
            }
        }
    },
})
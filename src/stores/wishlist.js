import axiosInstance from "@/services/axiosService";
import { defineStore } from "pinia";

export const useWishlist = defineStore("wishlist", {
    state: () => ({
        wishlists: {},
    }),
    actions:{
        async getWishlists(){
            try {
                let response = await axiosInstance.get("/wishlists");
                if(response.status == 200){
                    this.wishlists = response.data;
                    return new Promise((resolve) => {
                        resolve(response.data);
                    })
                }
            } catch (error) {
              console.log(error);
            }
        },

        async addToWishlist(product){
            try{
                let response = await axiosInstance.post("/user/wishlist/store", {
                    product_id: product.id
                });

                if(response.status){
                    return new Promise((resolve) => {
                        resolve(response.data);
                    })
                }

            }catch(error){
                console.log(error);
            }
        }
    },
})
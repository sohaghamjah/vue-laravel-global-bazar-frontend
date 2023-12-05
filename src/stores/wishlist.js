import axiosInstance from "@/services/axiosService";
import { defineStore } from "pinia";
import { userAuth } from "./auth";

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

                const auth = userAuth();
                
                if(response.status === 201){
                    auth.user.meta.wishlists.push(product);
                }else{
                    const index = auth.user.meta.wishlists.findIndex((i) => i.id == product.id);
                    auth.user.meta.wishlists.splice(index, 1);
                }

                if(response.status){
                    return new Promise((resolve) => {
                        resolve(response);
                    })
                }

            }catch(error){
                console.log(error);
            }
        },

    },
})
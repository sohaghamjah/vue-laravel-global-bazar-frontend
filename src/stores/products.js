import axiosInstance from "@/services/axiosService";
import { defineStore } from "pinia";

export const useProduct = defineStore("product", {
    state: () => ({
        products: {},
    }),
    actions:{
        async getProducts(){
            try {
                let response = await axiosInstance.get("/products");
                if(response.status == 200){
                    this.products = response.data;
                    return new Promise((resolve) => {
                        resolve(response.data);
                    })
                }
            } catch (error) {
              console.log(error);
            }
        }
    },
})
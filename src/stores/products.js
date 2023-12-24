import axiosInstance from "@/services/axiosService";
import { defineStore } from "pinia";

export const useProduct = defineStore("product", {
    state: () => ({
        products: {},
        sold: {},
        popular: {},
        feature: {},
        newProducts: {},
        winter: {},
        singleProduct: {},
    }),
    actions:{
        async getProducts(type = ''){
            try {
                let response = await axiosInstance.get("/products?conditions="+ type);
                if(response.status == 200){
                    if (type === "sale") {
                        this.sold = response.data;
                    } else if (type === "popular") {
                        this.popular = response.data;
                    }else if (type === "feature") {
                        this.feature = response.data;
                    }else if (type === "new") {
                        this.newProducts = response.data;
                    }else if (type === "winter") {
                        this.winter = response.data;
                    }else {
                        this.products = response.data;
                    }
                    return new Promise((resolve) => {
                        resolve(response.data);
                    })
                }
            } catch (error) {
              console.log(error);
            }
        },
        async getSingleProducts(slug){
            try {
                let response = await axiosInstance.get(`/products/details/${slug}`);
                if(response.status == 200){
                    this.singleProduct = response.data;
                }
            } catch (error) {
              console.log(error);
            }
        }
    },
})
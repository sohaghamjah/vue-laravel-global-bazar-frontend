import axiosInstance from "@/services/axiosService";
import { defineStore } from "pinia";

export const useCategory = defineStore("category", {
    state: () => ({
        categories: {},
    }),
    actions:{
        async getCategories(){
            try {
                let response = await axiosInstance.get("/categories");
                if(response.status == 200){
                    this.categories = response.data;
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
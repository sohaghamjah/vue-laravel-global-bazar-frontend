import axiosInstance from "@/services/axiosService";
import { defineStore } from "pinia";

export const useCategory = defineStore("category", {
    state: () => ({
        categories: {},
        navCategories: [],
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
        },
        async getNavCategories(){
            try {
                let response = await axiosInstance.get("/nav-categories");
                if(response.status == 200){
                    this.navCategories = response.data;
                }
            } catch (error) {
                console.log(error);
            }
        }
    },
})
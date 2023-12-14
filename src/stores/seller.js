import axiosInstance from "@/services/axiosService";
import { defineStore } from "pinia";

export const useSeller = defineStore("seller", {
    state: () => ({
        sellers: [],
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
        }
    },
})
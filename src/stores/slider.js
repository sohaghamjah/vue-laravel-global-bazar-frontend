import axiosInstance from "@/services/axiosService";
import { defineStore } from "pinia";

export const useSlider = defineStore("slider", {
    state: () => ({
        sliders: {},
    }),
    actions:{
        async getSliders(){
            try {
                let response = await axiosInstance.get("/sliders");
                if(response.status == 200){
                    this.sliders = response.data;
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
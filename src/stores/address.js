import axiosInstance from "@/services/axiosService";
import { defineStore } from "pinia";

export const useAddress = defineStore("address", {
    state: () => ({
        divisions: [],
        districts: [],
        user_address: {},
    }),
    actions:{
        async getDivisions(){
            try {
                let response = await axiosInstance.get("user/divisions");
                if(response.status == 200){
                    this.divisions = response.data.data;
                    return new Promise((resolve) => {
                        resolve(response.data);
                    })
                }
            } catch (error) {
              console.log(error);
            }
        },
        async getDistricts(division_id){
            try {
                let response = await axiosInstance.get("user/districts/"+division_id);
                if(response.status == 200){
                    this.districts = response.data.data;
                    return new Promise((resolve) => {
                        resolve(response.data);
                    })
                }
            } catch (error) {
              console.log(error);
            }
        },
        async storeAddress(form){
            try {
                let response = await axiosInstance.post('user/address/store', form);
                if(response.status === 201){
                    return new Promise((resolve) => {
                        resolve(response);
                    })
                }
            } catch (error) {
                return new Promise((reject) => {
                    reject(error.response.data.errors);
                })
            }
        },
        async getUserAddress(){
            try {
                let response = await axiosInstance.post('user/get/address');
                if(response.status === 200){
                    this.user_address = response.data.data;
                    return new Promise((resolve) => {
                        resolve(response);
                    })
                }
            } catch (error) {
                return new Promise((reject) => {
                    reject(error.response.data.errors);
                })
            }
        }
    },
})
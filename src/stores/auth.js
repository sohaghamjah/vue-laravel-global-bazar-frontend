import axiosInstance from "@/services/axiosService";
import { defineStore } from "pinia";

export const userAuth = defineStore("auth", {
    state: () => ({
        user: {},
        loading: false,
    }),
    persist: {
        paths: ["user"],
    },
    getters:{
        getUser: (state) => {
            return state.user.data;
        },
    },
    actions:{
        async login(formData){
            try {
                let response = await axiosInstance.post("/user/login", formData);
                if(response.status == 200){
                    console.log(response.data);
                    this.user = response.data;
                    return new Promise((resolve) => {
                        resolve(response.data);
                    })
                }
            } catch (error) {
                return new Promise((reject) => {
                    reject(error.response.data.errors);
                })
            }
        },

        async register(formData){
            try {
                let response = await axiosInstance.post("/user/register", formData);
                if(response.status === 201){
                    this.user = response.data;
                    return new Promise((resolve) => {
                        resolve(response.data);
                    })
                }
            } catch (error) {
                return new Promise((reject) => {
                    reject(error.response.data.errors);
                })
            }
        },

        async logout(){
            this.loading = true;
             try {
                let response = await axiosInstance.post("/user/logout");
                if(response.status == 200){
                    this.user = {};
                    return new Promise((resolve) => {
                        resolve(response.data);
                    });
                }
            } catch (error) {
                // return new Promise((reject) => {
                //     reject(error.response.data.errors);
                // })
                console.log(error);
            }finally{
                this.loading = false;
            }
        }
    },
})
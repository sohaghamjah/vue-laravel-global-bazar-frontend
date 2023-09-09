import axios from "axios";
import { defineStore } from "pinia";

export const userAuth = defineStore("auth", {
    state: () => ({
        user: {},
        errors: {},
    }),
    actions:{
        async login(formData){
            try {
                let response = await axios.post(import.meta.env.VITE_API_URL + "/api/v1/user/login", formData);
                if(response.status == 200){
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
    },
})
import axios from "axios";
import { defineStore } from "pinia";

export const userAuth = defineStore("auth", {
    actions:{
        async login(formData){
            try {
                let response = await axios.post(import.meta.env.VITE_API_URL + "/api/v1/user/login", formData);
                
                if(response.status == 200){
                    console.log(response); 
                }
            } catch (error) {
                console.log(error); 
            }
        },
    },
})
import axiosInstance from "@/services/axiosService";
import { defineStore } from "pinia";
import { useNotification } from '@/stores';

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
        async updateProfile(form){
            try {
                let response = await axiosInstance.post('user/profile/update', form);
                console.log(response);
                if(response.status === 200){
                    this.user.data = response.data.data
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

        async imageUpdate(data) {
            this.loading = true;
            try {
                const res = await axiosInstance.post("/user/image/update", data);
                if (res.status === 200) {
                    this.user.data = res.data.data;
                    const notify = useNotification();
                    notify.notificationElement('success', 'Profile Image Updated Successful!', 'Success');
                }
            } catch (error) {
                if (error.response) {
                }
            } finally {
                this.loading = false;
            }
        },
    
        async updatePassword(form){
            try {
                let response = await axiosInstance.post('user/password/update', form);
                if(response.status === 200){
                    return new Promise((resolve) => {
                        resolve(response);
                    })
                }
            } catch (error) {
                return new Promise((reject) => {
                    reject(error.response.data);
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
        },
    },
})
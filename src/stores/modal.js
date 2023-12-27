import { defineStore } from "pinia";

export const useModal = defineStore("modal", {
  state: () => ({ 
    isOpen: false 
  }),
  actions: {
    toggleModal(){
      this.isOpen = !this.isOpen;
    },
    openModal(){
      this.isOpen = true;
    },
    closeModal(){
      this.isOpen = false;
    }
  },
});

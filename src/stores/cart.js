import { defineStore } from "pinia";

export const useCart = defineStore("cart", {
  state: () => ({ 
    cartItems: [],
  }),
  persist :{
    paths: ['cartItems'],
  },
  getters:{
    cartTotal: (state) => {
      let total = 0;
      state.cartItems.map((el) => {
        total += el['price'] * el['quantity'];
      })
      return total;
    },
    cartItemsCount: (state) => {
      let qty = 0;
      state.cartItems.map((el) => {
        qty += el['quantity'];
      })

      return qty;
    }
  },
  actions: {
    addToCart(product) {
      let item = product;
      item = {...item, quantity: 1};

      if(this.cartItems.length > 0){
        let flag = this.cartItems.some((i) => i.id === item.id);
        if(flag){
          let index = this.cartItems.findIndex((i) => i.id === item.id);
          this.cartItems[index]["quantity"] += 1;
        }else{
          this.cartItems.push(item);
        }
      }else{
        this.cartItems.push(item);
      }
    },

    async destroy(index){
      if(this.cartItems.length > 0){
        this.cartItems.splice(index, 1);
      }
    },
    async increment(index){
      if(this.cartItems.length > 0){
        this.cartItems[index]["quantity"] += 1;
      }
    },

    async decrement(index){
      if(this.cartItems.length > 0){
        if(this.cartItems[index]["quantity"] > 1){
          this.cartItems[index]["quantity"] -= 1;
        }
      }
    }
  },
});

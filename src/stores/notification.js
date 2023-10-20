import { defineStore } from "pinia";
import { ElNotification } from 'element-plus'

export const useNotification = defineStore("notification", {
  state: () => ({ 
    position: "top-left",
  }),
  actions: {
    notificationElement(status, message, title){
      ElNotification({
        title: title,
        message: message,
        type: status,
        position: this.position,
      })
    }
  },
});

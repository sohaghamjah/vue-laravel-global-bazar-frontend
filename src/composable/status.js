import { defineStore } from "pinia";
import { ref } from "vue";
import { computed } from "vue";

export const useStatus = defineStore('status', () => {
    const coupon_status = ref(false)

    function toggleBtn() {
        this.coupon_status = !this.coupon_status;
    }

    return { coupon_status ,toggleBtn }
})
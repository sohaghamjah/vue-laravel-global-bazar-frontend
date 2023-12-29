<script setup>
    import { Modal } from '@/components';
    import { useModal, useAddress } from '@/stores';
    import { onMounted, ref } from 'vue';

    const modal = useModal();
    const address = useAddress();

    onMounted(() => {
        address.getDivisions();
    })

    const divisionId = ref('');

    const getDistrict = () => { 
        address.getDistricts(divisionId.value)
    }

</script>
<template>
    <div>
        <Modal>
            <form class="modal-form">
                <div class="form-title">
                    <h3>add new address</h3>
                </div>
                <div class="form-group">
                    <label class="form-label">Select Area</label>
                    <select class="form-select" @change="getDistrict" v-model="divisionId">
                        <option disabled selected value="">Choose Division</option>
                        <option v-for="(division, index) in address?.divisions" :key="index" :value="division.id">{{ division.name +' - '+ division.bn_name }}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">Select Area</label>
                    <select class="form-select">
                        <option disabled selected value="">Choose District</option>
                        <option v-for="(district, index) in address?.districts" :key="index" :value="district.id">{{ district.name +' - '+ district.bn_name }}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">address</label><textarea class="form-control"
                        placeholder="Enter your address"></textarea>
                </div>
                <button class="form-btn" type="submit">
                    save address info
                </button>
            </form>
        </Modal>

        <div class="col-lg-12">
            <div class="account-card">
                <div class="account-title">
                    <h4>delivery address</h4>
                    <button @click.prevent="modal.openModal()">
                        add address
                    </button>
                </div>
                <div class="account-content">
                    <div class="row">
                        <div class="col-md-6 col-lg-4 alert fade show">
                            <div class="profile-card address active">
                                <!-- <h6>Home</h6> -->
                                <p>
                                    <span>Dhaka</span>, <span>Gazipur</span>, Gazipur
                                    ChowRasta.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

</style>
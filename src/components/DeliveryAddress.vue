<script setup>
    import { Modal } from '@/components';
    import { useModal, useAddress, useNotification } from '@/stores';
    import { onMounted, reactive } from 'vue';
    import { Form, Field } from 'vee-validate';
    import * as yup from 'yup';

    const modal = useModal();
    const address = useAddress();

    onMounted(() => {
        address.getDivisions();
        address.getUserAddress();
    })

    const form = reactive({
        division_id: "",
        district_id: "",
        address    : "",
    });

    const getDistrict = () => { 
        address.getDistricts(form.division_id)
    }

    const notify = useNotification();

    const schema = yup.object({
        district_id: yup.string().required("The District field is required"),
        division_id: yup.string().required("The division field is required"),
        address    : yup.string().required("The address field is required"),
    });

    const onSubmit = async (values, {
        setErrors
    }) => {
        const res = address.storeAddress(values);
        if (res) {
            address.getUserAddress();
            modal.closeModal()
            notify.notificationElement('success', 'Address Store Successful!', 'Success');
        } else {
            setErrors(response);
        }
    }

</script>
<template>
    <div> 
        <Modal>
            <Form class="modal-form" @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
                <div class="form-title">
                    <h3>add new address</h3>
                </div>
                <div class="form-group">
                    <label class="form-label">Select Area</label>
                    <Field name="division_id" class="form-select" as="select" @change="getDistrict" v-model="form.division_id"  :class="{ 'is-invalid': errors.division_id }">
                        <option disabled selected value="">Choose Division</option>
                        <option v-for="(division, index) in address?.divisions" :key="index" :value="division.id">{{ division.name +' - '+ division.bn_name }}</option>
                    </Field>
                </div>
                <div class="form-group">
                    <label class="form-label">Select Area</label>
                    <Field class="form-select" name="district_id" as="select" :class="{ 'is-invalid' : errors.district_id }" v-model="form.district_id">
                        <option disabled selected value="">Choose District</option>
                        <option v-for="(district, index) in address?.districts" :key="index" :value="district.id">{{ district.name +' - '+ district.bn_name }}</option>
                    </Field>
                </div>
                <div class="form-group">
                    <label class="form-label">address</label>
                    <Field class="form-control" name="address" v-model="form.address" placeholder="Enter your address" :class="{ 'is-invalid' : errors.address }"></Field>
                </div>
                <button class="form-btn" type="submit" :disabled="isSubmitting">save address info 
                    <span v-show="isSubmitting" class="spinner-border spinner-border-sm ms-1"></span>
                </button>
            </Form>
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
                                    <span>{{ address?.user_address?.division?.name }}</span>, <span>{{ address?.user_address?.district?.name }}</span>, {{ address?.user_address?.address }}
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
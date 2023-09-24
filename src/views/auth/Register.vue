<script setup>
    import { ref } from "vue";
    import { Form, Field } from 'vee-validate';
    import * as yup from "yup";
    import { userAuth } from "@/stores/auth";
    import { useRouter } from 'vue-router';
    import { ElNotification } from 'element-plus'

    // Password show hide
    const passwordShow = ref(true);
    const toggleShow = () => {
      passwordShow.value = !passwordShow.value;
    }

    // Form validation
    const schema = yup.object({
        name: yup.string().required(),
        email: yup.string().required().email(),
        phone: yup.string().required(),
        password: yup.string().required().min(8),
        password_confirmation: yup.string().required("password_confirmation is a required field").min(8).oneOf([yup.ref("password"), null], "password and confirm password must be match"),
    });

    const auth = userAuth();
    const router = useRouter();

    // Api Call Via store (Auth)
    const onSubmit = async (values, { setErrors }) => {
        const res = await auth.register(values);
        if (res.data) {
          sendOtp.value = true;
        } else {
            setErrors(res);
        }
    };
    
    const sendOtp = ref(false);

    // Sms verificaiton 
    const otpSchema = yup.object({
        otp_code: yup.number().required(),
    });

    const onOtpSubmit = async (values, { setErrors }) => {

    };
</script>
<template>
    <div>
        <section class="user-form-part">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-sm-10 col-md-12 col-lg-12 col-xl-6">
                        <div class="user-form-card">
                            <div class="user-form-title">
                                <h2 v-if="sendOtp">Verify Your Mo bile</h2>
                                <h2 v-else>Customer Registration</h2>
                                <p>Use your required information</p>
                            </div>
                            <div class="user-form-group" v-if="!sendOtp">
                                <Form class="user-form" @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <Field name="name" type="text" class="form-control" :class="{'is-invalid' : errors.name}" placeholder="Name" />
                                                <span class="text-danger" v-if="errors.name">{{ errors.name }}</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <Field type="text" name="phone" class="form-control" :class="{'is-invalid' : errors.phone}" placeholder="Phone" />
                                                <span class="text-danger" v-if="errors.phone">{{ errors.phone }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <Field type="email" name="email" class="form-control" :class="{'is-invalid' : errors.email}" placeholder="Email" />
                                        <span class="text-danger" v-if="errors.email">{{ errors.email }}</span>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <Field name="password" :type="passwordShow ? 'password' :  'text'" class="form-control" :class="{'is-invalid' : errors.password}" placeholder="password" />
                                                <span class="view-password" @click="toggleShow"><i class="fas text-success" :class="passwordShow ? 'fa-eye' : 'fa-eye-slash'"></i></span>
                                                <span class="text-danger" v-if="errors.password">{{ errors.password }}</span>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <Field name="password_confirmation" :type="passwordShow ?  'password' : 'text'" class="form-control" :class="{'is-invalid' : errors.password_confirmation}" placeholder="password" />
                                                <span class="text-danger" v-if="errors.password_confirmation">{{ errors.password_confirmation }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-button">
                                        <button type="submit" :disabled="isSubmitting">Register 
                                            <span v-show="isSubmitting" class="spinner-border spinner-border-sm ms-1"></span>
                                        </button>
                                    </div>
                                </Form>
                            </div>

                            <div class="user-form-group" v-else>
                                <Form class="user-form" @submit="onOtpSubmit" :validation-schema="otpSchema" v-slot="{ errors, isSubmitting }">
                                    <div class="form-group">
                                        <Field type="number" name="otp_code" class="form-control" :class="{'is-invalid' : errors.otp_code}" placeholder="Otp Code" />
                                        <span class="text-danger" v-if="errors.otp_code">{{ errors.otp_code }}</span>
                                    </div>
                                    <div class="form-button">
                                        <button type="submit" :disabled="isSubmitting">Verify Otp 
                                            <span v-show="isSubmitting" class="spinner-border spinner-border-sm ms-1"></span>
                                        </button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                        <div class="user-form-remind">
                            <p>
                                Already Have An Account? <router-link :to="{ name: 'user.login' }">Login Here</router-link>
                            </p>
                        </div>
                        <div class="user-form-footer"></div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style>
    @import "@/assets/css/user-auth.css";
</style>

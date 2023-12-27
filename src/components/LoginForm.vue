<script setup>
    import {
        userAuth,
        useNotification,
        useModal
    } from "@/stores";
    import {
        ref
    } from "vue";
    import {
        useRouter,
        useRoute
    } from 'vue-router'
    import {
        Field,
        Form
    } from 'vee-validate';

    import * as yup from 'yup';

    const schema = yup.object({
        phone: yup.string().required("The phone field is required"),
        password: yup.string().required("The password field is required"),
    });

    const auth = userAuth();
    const router = useRouter();
    const route = useRoute();
    const notify = useNotification();
    const modal = useModal();


    const onSubmit = async (values, {
        setErrors
    }) => {
        const response = await auth.login(values)
        if (response.data) {
            router.push({
                name: route.path === '/user/login' ? 'home' : ''
            });
            modal.closeModal();
            notify.notificationElement('success', 'Congrats, Your Are Logged Id!', 'Success');
        } else {
            setErrors(response);
        }

    }

    // Password toggle show hide
    const passwordShow = ref(true);
    const toggleShow = () => {
        passwordShow.value = !passwordShow.value
    }
</script>

<template>
    <div class="user-form-card">
        <div class="user-form-title">
            <h2>Customer Login</h2>
            <p>Use your credentials to access</p>
        </div>
        <div class="user-form-group" id="axiosForm">
            <Form class="user-form" @submit="onSubmit" :validation-schema="schema" v-slot="{ errors,isSubmitting }">
                <div class="form-group">
                    <Field name="phone" type="text" class="form-control" placeholder="phone no"
                        :class="{ 'is-invalid': errors.phone }" />
                    <span class="text-danger" v-if="errors.phone">{{ errors . phone }}</span>
                </div>
                <div class="form-group">
                    <Field name="password" :type="passwordShow ? 'password' : 'text'" class="form-control"
                        placeholder="password" :class="{ 'is-invalid': errors.password }" />
                    <span @click="toggleShow" class="view-password">
                        <i class="fas text-success" :class="passwordShow ? 'fa-eye' : 'fa-eye-slash'"></i>
                    </span><!--v-if-->
                    <span class="text-danger" v-if="errors.password">{{ errors . password }}</span>
                </div>
                <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" id="check" value=""><label
                        class="form-check-label" for="check">Remember Me</label>
                </div>
                <div class="form-button">
                    <button type="submit" style="margin-bottom: 10px" :disabled="isSubmitting">
                        login
                        <span v-show="isSubmitting" class="spinner-border spinner-border-sm ms-1"></span>
                    </button>
                    <p>
                        Don't have any account? <router-link :to="{ name: 'user.register' }">Register Here</router-link>
                </p>
                </div>
            </Form>
        </div>
    </div>
</template>

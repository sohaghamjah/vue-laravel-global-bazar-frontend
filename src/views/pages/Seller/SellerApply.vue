<script setup>
    import { Form, Field } from 'vee-validate';
    import * as yup from 'yup';
    import { useSeller, useNotification } from "@/stores";
    import { ref } from 'vue';

    const passwordShow = ref(true);

    const toggleShow = () => {
      passwordShow.value = !passwordShow.value;
    }

    const seller = useSeller();
    const notify = useNotification();

    const schema = yup.object({
        terms: yup.string().required(),
        name: yup.string().required(),
        shop_name: yup.string().required(),
        address: yup.string().required(),
        email: yup.string().required().email(),
        phone: yup.string().required(),
        password: yup.string().required().min(8),
        password_confirmation: yup
            .string()
            .required("password confirmation is a required field")
            .min(8)
            .oneOf(
            [yup.ref("password"), null],
            "password and confirm password must be match"
            ),
    });
    
    const onSubmit = async (values, { setErrors, resetForm }) => {
        const res = await seller.register(values);
        if (res.status) {
            notify.notificationElement("success","Seller Apply Submitted","Success");
            resetForm();
        } else {
            setErrors(res);
        }
    };

</script>
<template>
      <section class="user-form-part">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-sm-10 col-md-12 col-lg-12 col-xl-12">
              <div class="user-form-card">
                <div class="user-form-title">
                  <h2>Seller Registration Form</h2>
                  <p>Use your right information and start your business</p>
                </div>
                <div class="user-form-group" id="axiosForm">
                  <Form class="user-form" @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <Field
                            type="text"
                            name="name"
                            :class="{'is-invalid': errors.name}"
                            class="form-control"
                            placeholder="your name"
                          />
                          <span class="text-danger" v-if="errors.name">{{ errors.name }}</span>
                        </div>
                        <div class="form-group">
                          <Field
                            type="text"
                            name="shop_name"
                            :class="{'is-invalid': errors.shop_name}"
                            class="form-control"
                            placeholder="shop name"
                          />
                          <span class="text-danger" v-if="errors.shop_name">{{ errors.shop_name }}</span>
                        </div>
                        <div class="form-group">
                          <Field
                            type="text"
                            name="phone"
                            :class="{'is-invalid': errors.phone}"
                            class="form-control"
                            placeholder="phone no"
                          />
                          <span class="text-danger" v-if="errors.phone">{{ errors.phone }}</span>
                        </div>
                        <div class="form-group">
                          <Field
                            as="textarea"
                            name="address"
                            :class="{'is-invalid': errors.address}"
                            class="form-control"
                            placeholder="shop address"
                          ></Field>
                          <span class="text-danger" v-if="errors.address">{{ errors.address }}</span>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <Field
                            type="email"
                            name="email"
                            :class="{'is-invalid': errors.email}"
                            class="form-control"
                            placeholder="email address"
                          />
                          <span class="text-danger" v-if="errors.email">{{ errors.email }}</span>
                        </div>
                        <div class="form-group">
                          <Field
                            :type="passwordShow ? 'password' :  'text'"
                            name="password"
                            :class="{'is-invalid': errors.password}"
                            class="form-control"
                            placeholder="password"
                          /><span class="view-password" @click="toggleShow"
                            ><i class="fas text-success" :class="passwordShow ? 'fa-eye' : 'fa-eye-slash'"></i></span
                          >
                          <span class="text-danger" v-if="errors.password">{{ errors.password }}</span>
                        </div>
                        <div class="form-group">
                          <Field
                            :type="passwordShow ? 'password' :  'text'"
                            class="form-control"
                            name="password_confirmation"
                            :class="{'is-invalid': errors.password_confirmation}"
                            placeholder="Retype Password"
                          /><span class="view-password"
                            ><i class="fas text-success" :class="passwordShow ? 'fa-eye' : 'fa-eye-slash'"></i
                          ></span>
                          <span class="text-danger" v-if="errors.password_confirmation">{{ errors.password_confirmation }}</span>
                        </div>
                        <div class="form-check mb-3">
                          <Field
                            class="form-check-input"
                            type="checkbox"
                            name="terms"
                            :class="{'is-invalid': errors.terms}"
                            value="on"
                            id="check"
                          /><label class="form-check-label" for="check"
                            >agree with all <a href="">terms</a> &amp;
                            <a href="">conditions</a></label
                          >
                          <span class="text-danger" v-if="errors.terms">{{ errors.terms }}</span>
                        </div>
                        <div class="form-button">
                            <button type="submit"> 
                                Submit
                                <span
                                    v-show="isSubmitting"
                                    class="spinner-border spinner-border-sm mr-1"
                                ></span>
                            </button>
                        </div>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
              <div class="user-form-footer"></div>
            </div>
          </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>

</style>
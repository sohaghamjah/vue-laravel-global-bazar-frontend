<script setup>
  import { userAuth, useNotification } from "@/stores";
  import { ref } from "vue";
  import { useRouter } from 'vue-router'
  import { Field, Form } from 'vee-validate';
  import * as yup from 'yup';

  const schema = yup.object({
    phone: yup.string().required("The phone field is required"),
    password: yup.string().required("The password field is required"),
  });

  const auth = userAuth();
  const router = useRouter();
  const notify = useNotification();


  const onSubmit = async (values, { setErrors }) => {
    const response = await auth.login(values)
    if(response.data){
      router.push({ name: 'home'});
      notify.notificationElement('success', 'Congrats, Your Are Loged Id!', 'Success');
    }else{
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
  <div>
    <section class="user-form-part">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-sm-10 col-md-12 col-lg-12 col-xl-6">
              <div class="user-form-card">
                <div class="user-form-title">
                  <h2>Customer Login</h2>
                  <p>Use your credentials to access</p>
                </div>
                <div class="user-form-group" id="axiosForm">
                  <Form class="user-form" @submit="onSubmit" :validation-schema="schema" v-slot="{ errors,isSubmitting }">         
                    <div class="form-group">
                      <Field name="phone" type="text" class="form-control" placeholder="phone no" :class="{'is-invalid': errors.phone}"/>
                      <span class="text-danger" v-if="errors.phone">{{ errors.phone }}</span>
                    </div>
                    <div class="form-group">
                      <Field name="password" :type="passwordShow ? 'password' : 'text'" class="form-control" placeholder="password" :class="{'is-invalid': errors.password}"/>
                      <span @click="toggleShow" class="view-password">
                        <i class="fas text-success" 
                        :class="passwordShow ? 'fa-eye' : 'fa-eye-slash'"
                        ></i>
                      </span><!--v-if-->
                      <span class="text-danger" v-if="errors.password">{{ errors.password }}</span>
                    </div>
                    <div class="form-check mb-3">
                      <input class="form-check-input" type="checkbox" id="check" value=""><label class="form-check-label" for="check">Remember Me</label>
                    </div>
                    <div class="form-button">
                      <button type="submit" style="margin-bottom: 10px" :disabled="isSubmitting">
                        login
                       <span v-show="isSubmitting" class="spinner-border spinner-border-sm ms-1"></span>
                      </button>
                      <p>
                        Forgot your password?<a href="reset-password.html" class="">reset here</a>
                      </p>
                    </div>
                  </Form>
                </div>
              </div>
              <div class="user-form-remind">
                <p>
                    Don't have any account? <router-link :to="{ name: 'user.register' }">Register Here</router-link>
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
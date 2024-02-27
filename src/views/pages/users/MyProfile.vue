<script setup>
  import { LocalModal } from '@/components';
  import { useModal, userAuth, useNotification } from '@/stores';
  import { DeliveryAddress } from '@/components';
  import { storeToRefs } from 'pinia';
  import { reactive, ref } from 'vue';
  import { Form, Field } from 'vee-validate';
  import * as yup from 'yup';

  const modal = useModal();
  const auth = userAuth();
  const { getUser } = storeToRefs(auth);

  const visible = ref(false);
  const visiblePassword = ref(false);
  const openModal = (data) => {
    if(data == 'profile'){
      visible.value = true;
    }else{
      visiblePassword.value = true;
    }
  }

  const closeEditModal = (data) => {
    if(data == 'profile'){
      visible.value = false;
    }{
      visiblePassword.value = false;
    }
  }

  // Form Submit

  const form = reactive({
    name: auth.user?.data?.name,
    email: auth.user?.data?.email,
    phone: auth.user?.data?.phone,
  })  

  const schema = yup.object({
      name : yup.string().required("The Name field is required"),
      email: yup.string().required("The email field is required"),
      phone: yup.string().required("The phone field is required"),
  });

  const notify = useNotification();

  const onSubmit = async (values, {
        setErrors
    }) => {
        const res = await auth.updateProfile(values);
        console.log(res);
        if (res.data) {
            visible.value = false;
            notify.notificationElement('success', 'Profile Updated Successful!', 'Success');
        } else {
          setErrors(res);
        }
    }

    // Password Form Submit
    const passwordShow = ref(true);
    const toggleShow = () => {
      passwordShow.value = !passwordShow.value;
    }

    // Form validation
    const password_schema = yup.object({
      current_password: yup.string().required('This field is required').min(8),
      password: yup.string().required().min(8),
      password_confirmation: yup.string().required("This field is required").min(8).oneOf([yup.ref("password"), null], "password and confirm password must be match"),
    });

    const onPasswordSubmit = async (values, {
        setErrors
    }) => {
      const res = await auth.updatePassword(values);
      if (res.data){
          visiblePassword.value = false;
          notify.notificationElement('success', 'Password Updated Successful!', 'Success');
      }else {
          if(res.message){
            notify.notificationElement('error', 'Invalid Current Password!', 'Error');
          }
          setErrors(res.errors);
      }
    }

</script>

<template>
  <LocalModal :visible="visible" @close="closeEditModal('profile')">
    <Form class="modal-form" @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
      <div class="form-title"><h3>edit profile info</h3></div>
      <div class="form-group">
        <label class="form-label">name</label>
        <Field 
          class="form-control" 
          type="text"
          name="name" 
          v-model="form.name" 
          :class="{'is-invalid' : errors.name}"
          ></Field>
          <span class="text-danger" v-if="errors.name">{{ errors.name }}</span>
      </div>
      <div class="form-group">
        <label class="form-label">email</label>
        <Field
          class="form-control"
          type="text"
          name="email"
          v-model="form.email"
          :class="{ 'is-invalid' : errors.email }"
        ></Field>
        <span class="text-danger" v-if="errors.email">{{ errors.email }}</span>
      </div>
      <div class="form-group">
        <label class="form-label">Phone</label
        ><Field
          class="form-control"
          type="text"
          name="phone"
          v-model="form.phone"
          :class="{ 'is-invalid' : errors.phone }"
        ></Field>
        <span class="text-danger" v-if="errors.phone">{{ errors.phone }}</span>
      </div>
      <button :disabled="isSubmitting" class="form-btn" type="submit">Save profile info
        <span v-show="isSubmitting" class="spinner-border spinner-border-sm ms-1"></span>
      </button>
    </Form>
  </LocalModal>

  <LocalModal :visible="visiblePassword" @close="closeEditModal('password')">
    <Form class="modal-form" @submit="onPasswordSubmit" :validation-schema="password_schema" v-slot="{ errors, isSubmitting }">
      <div class="form-title"><h3>update password</h3></div>

      <div class="form-group">
        <label class="form-label">Current Password</label>
        <Field name="current_password" :type="passwordShow ? 'password' :  'text'" class="form-control" :class="{'is-invalid' : errors.password}" placeholder="password" />
        <span class="view-password" @click="toggleShow"><i class="fas text-success" :class="passwordShow ? 'fa-eye' : 'fa-eye-slash'"></i></span>
        <span class="text-danger" v-if="errors.current_password">{{ errors.current_password }}</span>
      </div>

      <div class="form-group">
        <label class="form-label">New Password</label>
        <Field name="password" :type="passwordShow ? 'password' :  'text'" class="form-control" :class="{'is-invalid' : errors.password}" placeholder="password" />
        <span class="view-password" @click="toggleShow"><i class="fas text-success" :class="passwordShow ? 'fa-eye' : 'fa-eye-slash'"></i></span>
        <span class="text-danger" v-if="errors.password">{{ errors.password }}</span>
      </div>

      <div class="form-group">
        <label class="form-label">Current Password</label>
        <Field name="password_confirmation" :type="passwordShow ? 'password' :  'text'" class="form-control" :class="{'is-invalid' : errors.password}" placeholder="password" />
        <span class="view-password" @click="toggleShow"><i class="fas text-success" :class="passwordShow ? 'fa-eye' : 'fa-eye-slash'"></i></span>
        <span class="text-danger" v-if="errors.password_confirmation">{{ errors.password_confirmation }}</span>
      </div>

      <button :disabled="isSubmitting" class="form-btn" type="submit">update password
        <span v-show="isSubmitting" class="spinner-border spinner-border-sm ms-1"></span>
      </button>
    </Form>
  </LocalModal>

  <div>
    <section
    class="inner-section single-banner"
  >
    <div class="container">
      <h2>my profile</h2>
    </div>
  </section>

  <section class="inner-section profile-part">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="account-card">
            <div class="account-title">
              <h4>Your Profile</h4>
             <div>
              <button class="me-2" @click.prevent="openModal('profile')">
                edit profile
              </button>
              <button @click.prevent="openModal('password')">
                update password
              </button>
             </div>
            </div>
            <div class="account-content">
              <div class="row">
                <div class="col-lg-2">
                  <div class="profile-image">
                    <a href="#"><img src="@/assets/images/user.png" alt="user" /></a>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4">
                  <div class="form-group">
                    <label class="form-label">name</label
                    ><input
                      class="form-control"
                      type="text"
                      readonly
                      :value="getUser.name"
                    />
                  </div>
                </div>
                <div class="col-md-6 col-lg-4">
                  <div class="form-group">
                    <label class="form-label">Email</label
                    ><input
                      class="form-control"
                      type="email"
                      readonly
                      :value="getUser.email"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <DeliveryAddress />

      </div>
    </div>
  </section>
  </div>
</template>
  

<style>

</style>
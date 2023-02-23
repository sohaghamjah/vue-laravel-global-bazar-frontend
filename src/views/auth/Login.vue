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
                  <form class="user-form" @submit.prevent="onSubmit">
                    <!--v-if-->
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="phone no" v-model="form.phone"><!--v-if-->
                    </div>
                    <div class="form-group">
                      <input :type="passwordShow ? 'password' : 'text'" class="form-control" placeholder="password" v-model="form.password">
                      <span @click="toggleShow" class="view-password">
                        <i class="fas text-success" 
                        :class="passwordShow ? 'fa-eye' : 'fa-eye-slash'"
                        ></i>
                      </span><!--v-if-->
                    </div>
                    <div class="form-check mb-3">
                      <input class="form-check-input" type="checkbox" id="check" value=""><label class="form-check-label" for="check">Remember Me</label>
                    </div>
                    <div class="form-button">
                      <button type="submit" style="margin-bottom: 10px">login</button>
                      <p>
                        Forgot your password?<a href="reset-password.html" class="">reset here</a>
                      </p>
                    </div>
                  </form>
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

<script setup>
  import { userAuth } from "@/stores/auth";
  import { reactive, ref } from "@vue/reactivity";

  const store = userAuth()

  const form = reactive({
    phone: "",
    password: ""
  })

  const onSubmit = async () => {
    await store.login(form)
  }

  // Password toggle show hide
  const passwordShow = ref(true);

  const toggleShow = () => {
    passwordShow.value = !passwordShow.value
  }

</script>

<style>
    @import "@/assets/css/user-auth.css";
</style>
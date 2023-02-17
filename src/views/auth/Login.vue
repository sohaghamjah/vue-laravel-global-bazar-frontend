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
                  <form class="user-form">
                    <!--v-if-->
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="phone no"><!--v-if-->
                    </div>
                    <div class="form-group">
                      <input type="password" class="form-control" placeholder="password"><span class="view-password"><i class="fas text-success fa-eye"></i></span><!--v-if-->
                    </div>
                    <div class="form-check mb-3">
                      <input class="form-check-input" type="checkbox" id="check" value=""><label class="form-check-label" for="check">Remember Me</label>
                    </div>
                    <div class="form-button">
                      <button type="submit" style="margin-bottom: 10px">login</button>
                      <button type="submit" @click.prevent="store.increment">{{ count }}</button>
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
  import { useCounter } from '@/stores/counter';
import { storeToRefs } from 'pinia';

  const store = useCounter()
  const { count, doubleCount } = storeToRefs(store)
</script>

<style>
    @import "@/assets/css/user-auth.css";
</style>
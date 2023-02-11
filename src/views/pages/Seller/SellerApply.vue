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
                  <form class="user-form">
                    <!--v-if-->
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="your name"
                          /><!--v-if-->
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="shop name"
                          /><!--v-if-->
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="phone no"
                          /><!--v-if-->
                        </div>
                        <div class="form-group">
                          <textarea
                            class="form-control"
                            placeholder="shop address"
                          ></textarea
                          ><!--v-if-->
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <input
                            type="email"
                            class="form-control"
                            placeholder="email address"
                          /><!--v-if-->
                        </div>
                        <div class="form-group">
                          <input
                            type="password"
                            class="form-control"
                            placeholder="password"
                          /><span class="view-password"
                            ><i class="fas text-success fa-eye"></i></span
                          ><!--v-if-->
                        </div>
                        <div class="form-group">
                          <input
                            type="password"
                            class="form-control"
                            placeholder="Retype Password"
                          /><span class="view-password"
                            ><i class="fas text-success fa-eye"></i
                          ></span>
                        </div>
                        <div class="form-check mb-3">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="check"
                          /><label class="form-check-label" for="check"
                            >agree with all <a href="">terms</a> &amp;
                            <a href="">conditions</a></label
                          >
                        </div>
                        <div class="form-button">
                          <button type="submit">Submit</button>
                        </div>
                      </div>
                    </div>
                  </form>
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
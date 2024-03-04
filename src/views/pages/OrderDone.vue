<template>
    <section class="inner-section profile-part">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="d-flex justify-content-center align-items-center">
              <div class="card bg-white shadow p-5 mt-5">
                <div class="mb-4 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-success bi bi-check-circle"
                    width="75"
                    height="75"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                    />
                    <path
                      d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"
                    />
                  </svg>
                </div>
                <div class="text-center">
                  <h3>Thanks For Your Order!</h3>
                  <p>
                    Your satisfaction is our top priority, and we can't wait for
                    you to receive your order and experience.
                  </p>
                  <RouterLink
                    :to="{ name: 'home' }"
                    class="btn btn-outline-success"
                    >Back Home</RouterLink
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { onMounted } from "vue";
  import { useRoute, useRouter } from "vue-router";
  const route = useRoute();
  const router = useRouter();
  
  onMounted(() => {
    if (!route.query.order_type) {
      router.push({ name: "home" });
    }
  });

  </script>
  
  <style scoped></style>
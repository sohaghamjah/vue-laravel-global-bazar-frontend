<script setup>
  import { Modal } from '@/components';
  import { useModal, userAuth } from '@/stores';
  import { DeliveryAddress } from '@/components';
  import { storeToRefs } from 'pinia';

  const modal = useModal();
  const auth = userAuth();

  const { getUser } = storeToRefs(auth);

</script>

<template>

  <Modal>
    <form class="modal-form">
      <div class="form-title"><h3>edit profile info</h3></div>
      <div class="form-group">
        <label class="form-label">profile image</label
        ><input class="form-control" type="file" />
      </div>
      <div class="form-group">
        <label class="form-label">name</label
        ><input class="form-control" type="text" value="Miron Mahmud" />
      </div>
      <div class="form-group">
        <label class="form-label">email</label
        ><input
          class="form-control"
          type="text"
          value="w3 Coders@gmail.com"
        />
      </div>
      <button class="form-btn" type="submit">save profile info</button>
    </form>
  </Modal>

  <div>
    <section
    class="inner-section single-banner"
  >
    <div class="container">
      <h2>my profile</h2>
      {{ getUser }}
    </div>
  </section>

  <section class="inner-section profile-part">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="account-card">
            <div class="account-title">
              <h4>Your Profile</h4>
              <button @click.prevent="modal.toggleModal()">
                edit profile
              </button>
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
                      :value="getUser.email"
                    />
                  </div>
                </div>
                <div class="col-lg-2">
                  <div class="profile-btn">
                    <a href="change-password.html">change pass.</a>
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
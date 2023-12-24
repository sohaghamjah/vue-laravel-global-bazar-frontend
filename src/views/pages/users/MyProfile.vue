<script setup>
  import { Modal } from '@/components';
  import { useModal } from '@/stores';
  const modal = useModal();
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
                      value="Miron Mahmud"
                    />
                  </div>
                </div>
                <div class="col-md-6 col-lg-4">
                  <div class="form-group">
                    <label class="form-label">Email</label
                    ><input
                      class="form-control"
                      type="email"
                      value="w3 Coders@gmail.com"
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
        <div class="col-lg-12">
          <div class="account-card">
            <div class="account-title">
              <h4>contact number</h4>
              <button data-bs-toggle="modal" data-bs-target="#contact-add">
                add contact
              </button>
            </div>
            <div class="account-content">
              <div class="row">
                <div class="col-md-6 col-lg-4 alert fade show">
                  <div class="profile-card contact active">
                    <h6>primary</h6>
                    <p>+8801838288389</p>
                    <ul>
                      <li>
                        <button
                          class="edit icofont-edit"
                          title="Edit This"
                          data-bs-toggle="modal"
                          data-bs-target="#contact-edit"
                        ></button>
                      </li>
                      <li>
                        <button
                          class="trash icofont-ui-delete"
                          title="Remove This"
                          data-bs-dismiss="alert"
                        ></button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 alert fade show">
                  <div class="profile-card contact">
                    <h6>secondary</h6>
                    <p>+8801941101915</p>
                    <ul>
                      <li>
                        <button
                          class="edit icofont-edit"
                          title="Edit This"
                          data-bs-toggle="modal"
                          data-bs-target="#contact-edit"
                        ></button>
                      </li>
                      <li>
                        <button
                          class="trash icofont-ui-delete"
                          title="Remove This"
                          data-bs-dismiss="alert"
                        ></button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 alert fade show">
                  <div class="profile-card contact">
                    <h6>secondary</h6>
                    <p>+8801747875727</p>
                    <ul>
                      <li>
                        <button
                          class="edit icofont-edit"
                          title="Edit This"
                          data-bs-toggle="modal"
                          data-bs-target="#contact-edit"
                        ></button>
                      </li>
                      <li>
                        <button
                          class="trash icofont-ui-delete"
                          title="Remove This"
                          data-bs-dismiss="alert"
                        ></button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="account-card">
            <div class="account-title">
              <h4>delivery address</h4>
              <button data-bs-toggle="modal" data-bs-target="#address-add">
                add address
              </button>
            </div>
            <div class="account-content">
              <div class="row">
                <div class="col-md-6 col-lg-4 alert fade show">
                  <div class="profile-card address active">
                    <h6>Home</h6>
                    <p>
                      jalkuri, fatullah, narayanganj-1420. word no-09, road
                      no-17/A
                    </p>
                    <ul class="user-action">
                      <li>
                        <button
                          class="edit icofont-edit"
                          title="Edit This"
                          data-bs-toggle="modal"
                          data-bs-target="#address-edit"
                        ></button>
                      </li>
                      <li>
                        <button
                          class="trash icofont-ui-delete"
                          title="Remove This"
                          data-bs-dismiss="alert"
                        ></button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 alert fade show">
                  <div class="profile-card address">
                    <h6>Office</h6>
                    <p>
                      east tejturi bazar, dhaka-1200. word no-04, road
                      no-13/c, house no-4/b
                    </p>
                    <ul class="user-action">
                      <li>
                        <button
                          class="edit icofont-edit"
                          title="Edit This"
                          data-bs-toggle="modal"
                          data-bs-target="#address-edit"
                        ></button>
                      </li>
                      <li>
                        <button
                          class="trash icofont-ui-delete"
                          title="Remove This"
                          data-bs-dismiss="alert"
                        ></button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 alert fade show">
                  <div class="profile-card address">
                    <h6>Bussiness</h6>
                    <p>
                      kawran bazar, dhaka-1100. word no-02, road no-13/d,
                      house no-7/m
                    </p>
                    <ul class="user-action">
                      <li>
                        <button
                          class="edit icofont-edit"
                          title="Edit This"
                          data-bs-toggle="modal"
                          data-bs-target="#address-edit"
                        ></button>
                      </li>
                      <li>
                        <button
                          class="trash icofont-ui-delete"
                          title="Remove This"
                          data-bs-dismiss="alert"
                        ></button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="account-card mb-0">
            <div class="account-title">
              <h4>payment option</h4>
              <button data-bs-toggle="modal" data-bs-target="#payment-add">
                add card
              </button>
            </div>
            <div class="account-content">
              <div class="row">
                <div class="col-md-6 col-lg-4 alert fade show">
                  <div class="payment-card payment active">
                    <img src="@/assets/images/payment/png/01.png" alt="payment" />
                    <h4>card number</h4>
                    <p>
                      <span>****</span><span>****</span><span>****</span
                      ><sup>1876</sup>
                    </p>
                    <h5>miron mahmud</h5>
                    <button
                      class="trash icofont-ui-delete"
                      title="Remove This"
                      data-bs-dismiss="alert"
                    ></button>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 alert fade show">
                  <div class="payment-card payment">
                    <img src="@/assets/images/payment/png/02.png" alt="payment" />
                    <h4>card number</h4>
                    <p>
                      <span>****</span><span>****</span><span>****</span
                      ><sup>1876</sup>
                    </p>
                    <h5>miron mahmud</h5>
                    <button
                      class="trash icofont-ui-delete"
                      title="Remove This"
                      data-bs-dismiss="alert"
                    ></button>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 alert fade show">
                  <div class="payment-card payment">
                    <img src="@/assets/images/payment/png/03.png" alt="payment" />
                    <h4>card number</h4>
                    <p>
                      <span>****</span><span>****</span><span>****</span
                      ><sup>1876</sup>
                    </p>
                    <h5>miron mahmud</h5>
                    <button
                      class="trash icofont-ui-delete"
                      title="Remove This"
                      data-bs-dismiss="alert"
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>
  

<style>

</style>
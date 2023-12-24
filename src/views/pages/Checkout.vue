<script setup>
    import { Modal } from '@/components';
    import { useModal } from '@/stores';
    const modal = useModal();

    const couponForm = () => {
        $(this).hide(), $(".coupon-form").css("display", "flex");
    }
</script>
<template>
    <div>
        <Modal>
            <form class="modal-form">
                <div class="form-title">
                    <h3>add new address</h3>
                </div>
                <div class="form-group">
                    <label class="form-label">Select Area</label><select class="form-select">
                        <option value="">choose division</option>
                    </select>
                </div>
                <div class="form-group" style="display: none">
                    <label class="form-label">Select Division</label><select
                        class="form-select">
                        <option value="">choose district</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">address</label><textarea class="form-control"
                        placeholder="Enter your address"></textarea>
                </div>
                <button class="form-btn" type="submit">
                    save address info
                </button>
            </form>
        </Modal>
        <section class="inner-section single-banner">
            <div class="container">
                <h2>Checkout</h2>
            </div>
        </section>
        <section class="inner-section checkout-part">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12" style="display: none">
                        <div class="alert-info">
                            <p>
                                Returning customer?
                                <a href="javascript::void(0)" data-bs-toggle="modal" data-bs-target="#login-modal">Click
                                    here to login</a>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div class="col-lg-12">
                            <div class="account-card">
                                <div class="account-title">
                                    <h4>delivery address</h4>
                                    <button @click.prevent="modal.toggleModal()">
                                        add address
                                    </button>
                                </div>
                                <div class="account-content">
                                    <div class="row">
                                        <div class="col-md-6 col-lg-4 alert fade show">
                                            <div class="profile-card address active">
                                                <!-- <h6>Home</h6> -->
                                                <p>
                                                    <span>Dhaka</span>, <span>Gazipur</span>, Gazipur
                                                    ChowRasta.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="account-card">
                            <div class="account-title">
                                <h4>Your order</h4>
                            </div>
                            <div class="account-content">
                                <div class="table-scroll">
                                    <table class="table-list">
                                        <thead>
                                            <tr>
                                                <th scope="col">Product</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">quantity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="table-image">
                                                    <div>
                                                        <img src="http://127.0.0.1:8000/uploads/products/070120220216252JsAfaISYOqXxJ1L_450_450.jpg"
                                                            alt="product" />
                                                    </div>
                                                </td>
                                                <td class="table-name">
                                                    <h6>Iphone 12Pro Max</h6>
                                                </td>
                                                <td class="table-price">
                                                    <h6>৳96,000</h6>
                                                </td>
                                                <td class="table-quantity">
                                                    <h6>2</h6>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="table-image">
                                                    <div>
                                                        <img src="http://127.0.0.1:8000/uploads/seller/products/07012022004201xi5Arc2MTA5gae3O_450_450.jpg"
                                                            alt="product" />
                                                    </div>
                                                </td>
                                                <td class="table-name">
                                                    <h6>Gaming Keyboard</h6>
                                                </td>
                                                <td class="table-price">
                                                    <h6>৳1350</h6>
                                                </td>
                                                <td class="table-quantity">
                                                    <h6>1</h6>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="table-image">
                                                    <div>
                                                        <img src="http://127.0.0.1:8000/uploads/products/062020221217066NMbHwDRZogbMpJf_450_450.png"
                                                            alt="product" />
                                                    </div>
                                                </td>
                                                <td class="table-name">
                                                    <h6>Men Watch</h6>
                                                </td>
                                                <td class="table-price">
                                                    <h6>৳595</h6>
                                                </td>
                                                <td class="table-quantity">
                                                    <h6>1</h6>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="chekout-coupon">
                                    <button @click="couponForm" class="coupon-btn">Do you have a coupon code?</button>
                                    <form class="coupon-form">
                                        <input type="text" placeholder="Enter your coupon code" /><button
                                            type="submit"><span>apply</span></button>
                                    </form>
                                </div>
                                <div class="checkout-charge">
                                    <ul>
                                        <li><span>Sub total</span><span>৳193,945.00</span></li>
                                        <li><span>discount</span><span>৳0</span></li>
                                        <li><span>delivery charge</span><span>৳60</span></li>
                                        <li>
                                            <span>Total<small>(Incl. VAT)</small></span><span>৳194,005.00</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="checkout-proced">
                        <button class="btn btn-inline"><span></span> Place Order</button>
                    </div>
                </div>
            </div>
        </section>
    </div>

</template>

<style>
    @import "@/assets/css/checkout.css";
</style>
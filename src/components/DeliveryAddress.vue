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

        <div class="col-lg-12">
            <div class="account-card">
                <div class="account-title">
                    <h4>delivery address</h4>
                    <button @click.prevent="modal.openModal()">
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
</template>

<script setup>
    import { Modal } from '@/components';
    import { useModal } from '@/stores';
    const modal = useModal();
</script>

<style>

</style>
<script setup>
    import { LoginForm } from "@/components";
</script>

<template>
    <div>
        <div class="modal fade" id="login-modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <button class="modal-close icofont-close" data-bs-dismiss="modal"></button>
                    <div class="product-view">
                        <div class="row">
                            <div class="col-12 col-md-12 col-lg-12">
                                <LoginForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
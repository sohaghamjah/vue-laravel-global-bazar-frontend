<script setup>
    import { useModal } from '@/stores';
    const modal = useModal();

</script>
<template>
    <div v-show="modal.isOpen">
        <div class="modal fade show" style="display: block;" id="login-modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <button @click.prevent="modal.toggleModal()" class="modal-close icofont-close" data-bs-dismiss="modal"></button>
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .modal{
        background-color: rgba(10, 10, 10, 0.45);
    }
</style>
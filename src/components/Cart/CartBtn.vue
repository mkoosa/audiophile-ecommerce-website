<template>
    <action-button
        @click="checkout(router, drawerStore)"
        text="checkout"
        :class="['main-btn--orange', 'main-btn', 'cart-btn']"
    ></action-button>
</template>

<script setup lang="ts">
import ActionButton from '../Shared/ActionButton.vue';
import {useDrawerStore} from '@/stores/drawer';
import {useRouter} from 'vue-router';
import {checkout} from '@/api/cart';

const drawerStore = useDrawerStore();
const router = useRouter();

</script>

<style scoped>
.cart-btn {
    margin: 2.5rem 0 1rem 0;
    width: 100%;
    font-weight: 600;
}
</style>

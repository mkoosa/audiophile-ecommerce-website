<template>
    <div class="cart__header">
        <h2 class="cart__heading">cart ({{ TOTAL_ITEMS }})</h2>
        <p v-if="TOTAL_ITEMS" @click="removeAllProducts()" class="cart__remove">
            remove all
        </p>
    </div>
</template>
<script setup lang="ts">
import {computed} from 'vue';
import {useCartStore} from '@/stores/cart';
import {useDrawerStore} from '@/stores/drawer';
const drawerStore = useDrawerStore();

const cartStore = useCartStore();

const removeAllProducts = () => {
    cartStore.removeAllProducts();
    drawerStore.toggleDrawer();
};
const TOTAL_ITEMS = computed(() => cartStore.PRODUCTS_IN_CART.length);
</script>

<style scoped>
.cart__header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.cart__close {
    text-transform: uppercase;
    color: var(--orange);
    position: absolute;
    bottom: 2.8rem;
    left: -1rem;
}

.cart__heading {
    text-transform: uppercase;
    font-size: 1.8rem;
    letter-spacing: 0.2rem;
    font-weight: 600;
}
.cart__remove {
    text-align: right;
    color: var(--gray);
    font-size: 1.5rem;
    line-height: 1.6;
    font-weight: 500;
    text-decoration: underline;
}
.cart__remove::first-letter {
    text-transform: uppercase;
}
.close-cart-icon {
    height: 1.5em;
}
</style>

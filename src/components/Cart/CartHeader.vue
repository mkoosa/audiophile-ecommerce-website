<template>
    <div class="cart__header">
        <h2 class="cart__heading">cart ({{ TOTAL_ITEMS }})</h2>
        <p
            v-if="TOTAL_ITEMS"
            @click="removeAllProducts(cartStore, drawerStore, goBack)"
            class="cart__remove"
        >
            remove all
        </p>
    </div>
</template>
<script setup lang="ts">
import {computed} from 'vue';
import {useCartStore} from '@/stores/cart';
import {useDrawerStore} from '@/stores/drawer';
import {useRouter} from 'vue-router';
import {useRoute} from 'vue-router';
import {removeAllProducts} from '@/api/cart';

const drawerStore = useDrawerStore();
const cartStore = useCartStore();
const router = useRouter();
const route = useRoute();

const goBack = () => {
    if (route.name === 'Checkout') router.go(-1);
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
    font-weight: 700;
}
.cart__remove {
    padding: 0.5rem 0;
    text-align: right;
    color: var(--gray);
    font-size: 1.7rem;
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

@media only screen and (min-width: 1025px) {
    .cart__remove {
        cursor: pointer;
    }
}
</style>

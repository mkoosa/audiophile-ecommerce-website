<template>
    <div class="summary__items">
        <cart-items :products="CART_ITEMS" :quantities="CART_ITEMS_QUANTITIES">
            <template #cart="{product}">
                <checkout-quantity :product="product"></checkout-quantity>
            </template>
        </cart-items>
    </div>
</template>

<script setup lang="ts">
import {useCartStore} from '../../stores/cart';
import {computed} from 'vue';
import CartItems from '../Cart/CartItems.vue';
import CheckoutQuantity from './CheckoutQuantity.vue';

const cartStore = useCartStore();
const CART_ITEMS = computed(() => cartStore.PRODUCTS_IN_CART);
const CART_ITEMS_QUANTITIES = computed(() => cartStore.PRODUCTS_QUANTITIES);
</script>

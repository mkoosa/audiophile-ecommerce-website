<template>
    <div class="cart">
        <cart-header></cart-header>
        <cart-items
            :products="CART_ITEMS"
            :quantities="CART_ITEMS_QUANTITIES"
        ></cart-items>
        <cart-cost></cart-cost>
    </div>
</template>

<script setup lang="ts">
import {computed} from 'vue';
import CartHeader from '../Cart/CartHeader.vue';
import CartItems from './CartItems.vue';
import CartCost from './CartCost.vue';
import {useCartStore} from '../../stores/cart';

const cartStore = useCartStore();
const CART_ITEMS = computed(() => cartStore.PRODUCTS_IN_CART);
const CART_ITEMS_QUANTITIES = computed(() => cartStore.PRODUCTS_QUANTITIES);
</script>

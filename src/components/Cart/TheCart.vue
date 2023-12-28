<template>
    <div class="cart">
        <cart-header></cart-header>
        <cart-items :products="CART_ITEMS" :quantities="CART_ITEMS_QUANTITIES">
            <template #cart="{product}">
                <cart-plus-minus :product="product"></cart-plus-minus>
            </template>
        </cart-items>
        <cart-cost></cart-cost>
        <cart-btn></cart-btn>
    </div>
</template>

<script setup lang="ts">
import {computed} from 'vue';
import CartHeader from '../Cart/CartHeader.vue';
import CartItems from './CartItems.vue';
import CartCost from './CartCost.vue';
import CartBtn from './CartBtn.vue';
import CartPlusMinus from './CartPlusMinus.vue';
import {useCartStore} from '../../stores/cart';

const cartStore = useCartStore();
const CART_ITEMS = computed(() => cartStore.PRODUCTS_IN_CART);
const CART_ITEMS_QUANTITIES = computed(() => cartStore.PRODUCTS_QUANTITIES);
</script>

<template>
    <div class="summary__items" :class="class">
        <cart-items :products="CART_ITEMS" :quantities="CART_ITEMS_QUANTITIES">
            <template #cart="{product}">
                <checkout-quantity :product="product"></checkout-quantity>
            </template>
        </cart-items>
    </div>
</template>

<script lang="ts" setup>
import {useCartStore} from '../../stores/cart';
import {useConfirmationStore} from '@/stores/confirmation';
import {computed} from 'vue';
import CartItems from '../Cart/CartItems.vue';
import CheckoutQuantity from '../Checkout/CheckoutQuantity.vue';
import isDesktopView from '@/api/desktopView';

const confirmationStore = useConfirmationStore();
const cartStore = useCartStore();
const CART_ITEMS_QUANTITIES = computed(() => cartStore.PRODUCTS_QUANTITIES);

const CART_ITEMS = computed(() =>
    isDesktopView() && confirmationStore.IS_LESS
        ? cartStore.PRODUCTS_IN_CART
        : cartStore.FIRST_PRODUCTS_IN_CART,
);

defineProps({
    class: {
        type: String,
    },
});
</script>

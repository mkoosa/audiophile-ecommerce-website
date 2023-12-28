<template>
    <div class="confirmation__body">
        <confirmation-products
            :class="`confirmation__items`"
        ></confirmation-products>
        <p class="confirmation__summary">{{ quantity }}</p>
        <div class="confirmation__total total">
            <h3 class="total__heading">{{ totalHeading }}</h3>
            <p class="total__price">$ {{ TOTAL }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import ConfirmationProducts from './ConfirmationProducts.vue';
import {computed, ref} from 'vue';
import {useCartStore} from '@/stores/cart';
const cartStore = useCartStore();

const totalHeading = ref('grand total');

const quantity = computed(() =>
    cartStore.orderedProducts.length === 2
        ? `and ${cartStore.orderedProducts.length - 1}  other item`
        : cartStore.orderedProducts.length > 2
        ? `and ${cartStore.orderedProducts.length - 1}  other item(s)`
        : '',
);

const TOTAL = computed(() => cartStore.TOTAL_PRODUCTS_VALUE);
</script>

<style scoped>
.confirmation__body {
    background: var(--light-grey);
    border-radius: 1rem;
}
.confirmation__items {
    border-radius: 1rem 1rem 0 0;
}

.confirmation__summary {
    padding: 1.5rem 0 2.5rem 0;
    text-align: center;
    color: var(--gray);
    font-weight: 600;
    font-size: 1.5rem;
}

.total {
    padding: 1rem 2rem;
    background: var(--light-black);
    border-radius: 0 0 1rem 1rem;
}

.total__heading {
    padding-top: 1rem;
    text-transform: uppercase;
    font-size: 1.5rem;
    color: gray;
    font-weight: 600;
}
.total__price {
    color: var(--light-grey);
    padding: 1rem 0 1rem 0;
    font-size: 2rem;
    font-weight: 600;
}
</style>

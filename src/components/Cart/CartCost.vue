<template>
    <div class="cart__cost">
        <p class="cart__paragraph">total</p>
        <p class="cart__total">$ {{ TOTAL }}</p>
    </div>
</template>

<script setup lang="ts">
import {useCartStore} from '@/stores/cart';
import {computed} from 'vue';

const cartsStore = useCartStore();

const TOTAL = computed(() => cartsStore.TOTAL_PRODUCTS_VALUE);
</script>

<style scoped>
.cart__cost {
    margin-top: 3rem;
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
}

.cart__paragraph {
    font-size: 1.6rem;
    opacity: 0.9;
    font-weight: 600;
    color: var(--gray);
    text-transform: uppercase;
    letter-spacing: 0.1rem;
}

.cart__total {
    font-size: 1.8rem;
    font-weight: 700;
}
</style>

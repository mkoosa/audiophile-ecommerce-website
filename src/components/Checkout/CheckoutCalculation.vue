<template>
    <div class="summary__calculation">
        <div class="summary__item">
            <p>Total</p>
            <span>$ {{ TOTAL }}</span>
        </div>
        <div class="summary__item summary__item--shipping">
            <p>shipping</p>
            <span>$ {{ SHIPPING }}</span>
        </div>
        <div class="summary__item">
            <p>vat (included)</p>
            <span>$ {{ VAT }}</span>
        </div>
        <div class="summary__item summary__item--grand-total">
            <p>grand total</p>
            <span class="orange">$ {{ GRAND_TOTAL }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import {useCartStore} from '@/stores/cart';
import {computed} from 'vue';

const cartsStore = useCartStore();

const TOTAL = computed(() => cartsStore.TOTAL_PRODUCTS_VALUE);
const SHIPPING = computed(() => cartsStore.SHIPPING_COST);
const VAT = computed(() => cartsStore.VAT);
const GRAND_TOTAL = computed(() => cartsStore.GRAND_TOTAL);
</script>

<style scoped>
.summary__calculation {
    margin-top: 3rem;
}

.summary__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.summary__item--shipping {
    margin: 1.2rem 0;
}

.summary__item--grand-total {
    margin-top: 2.2rem;
}

.summary__item p {
    color: var(--gray);
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.05rem;
}

.summary__item span {
    font-size: 1.6rem;
    font-weight: 800;
    letter-spacing: 0.05rem;
}

.orange {
    color: var(--orange);
}
</style>

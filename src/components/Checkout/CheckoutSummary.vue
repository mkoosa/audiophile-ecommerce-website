<template>
    <div class="summary">
        <h2 class="summary__heading">{{ heading }}</h2>
        <checkout-products></checkout-products>
        <checkout-calculation></checkout-calculation>
    </div>
</template>
<script setup lang="ts">
import CheckoutProducts from './CheckoutProducts.vue';
import CheckoutCalculation from './CheckoutCalculation.vue';
import {ref} from 'vue';

const heading = ref('summary');
</script>

<style scoped>
.summary {
    margin: 7rem 0 2rem 0;
    background: var(--white);
}

.summary__heading {
    margin-bottom: 2.5rem;
    text-transform: uppercase;
    font-size: 1.8rem;
    font-weight: 700;
    letter-spacing: 0.1rem;
}
</style>

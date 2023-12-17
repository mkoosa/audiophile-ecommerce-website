<template>
    <div class="checkout indent">
        <go-back></go-back>
        <div class="checkout__body">
            <h1 class="checkout__heading">{{ headingTxt }}</h1>
            <checkout-form></checkout-form>
        </div>
    </div>
</template>

<script setup lang="ts">
import GoBack from '@/components/Shared/GoBack.vue';
import CheckoutForm from './CheckoutForm.vue';
import {ref} from 'vue';

const headingTxt = ref<string>('checkout');
</script>

<style scoped>
.checkout__body {
    padding: 0 2rem;
}
.checkout__heading {
    padding: 2rem 0;
    font-size: 2.6rem;
    font-weight: 700;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    color: var(--light-black);
}

.checkout .back {
    padding-top: 2rem;
}
</style>

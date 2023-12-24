<template>
    <div class="checkout indent">
        <go-back></go-back>
        <div class="checkout__body">
            <checkout-form></checkout-form>
        </div>
    </div>
</template>

<script setup lang="ts">
import GoBack from '@/components/Shared/GoBack.vue';
import CheckoutForm from './CheckoutForm.vue';
</script>

<style scoped>
.checkout .back {
    padding-top: 2rem;
}
.checkout__body {
    padding: 0 2rem;
    border-radius: 1rem;
    background: var(--white);
}
.checkout__heading {
    padding: 2rem 0;
    font-size: 2.6rem;
    font-weight: 700;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    color: var(--light-black);
}
@media only screen and (min-width: 1025px) {
    .checkout {
        background: var(--light-grey);
        padding-top: 5rem;
        padding-bottom: 11rem;
    }
    .checkout__body {
        padding: 0;
    }
}
</style>

<template>
    <div class="payment__cash">
        <img
            class="payment__img"
            src="/src/assets/cash/icon-cash-on-delivery.svg"
            alt="cash"
        />
        <p class="payment__description">{{ description }}</p>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
const description = ref(`Cash on
        Delivery option enables you to pay in cash when our delivery courier
        arrives at your residence. Just make sure your address is correct so
        that your order will not be cancelled`);
</script>

<style scoped>
.payment__cash {
    margin-top: 3rem;
    padding: 1rem 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.payment__img {
    margin-right: 2rem;
}

.payment__description {
    color: var(--gray);
    font-size: 1.5rem;
    font-weight: 400;
    text-align: justify;
    line-height: 1.5;
}
</style>

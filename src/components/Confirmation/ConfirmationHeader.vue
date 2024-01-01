<template>
    <header class="summary__header">
        <img
            class="summary__icon"
            src="/src/assets/checkout/icon-order-confirmation.svg"
            alt="confirmation icon"
        />
        <h2 class="summary__heading summary__heading--top">{{ headingTop }}</h2>
        <h2 class="summary__heading summary__heading--bottom">
            {{ headingBottom }}
        </h2>
        <p class="summary__paragraph">{{ paragraph }}</p>
    </header>
</template>

<script setup lang="ts">
import {ref} from 'vue';

const headingTop = ref('thank you');
const headingBottom = ref('for your order');
const paragraph = ref('You will receive an email confirmation shortly.');
</script>

<style scoped>
.summary__heading {
    font-size: 2.5rem;
    text-transform: uppercase;
    font-weight: 600;
    line-height: 1.3;
}

.summary__heading--top {
    padding-top: 2rem;
}

.summary__paragraph {
    padding: 1.5rem 0 3.5rem 0;
    font-size: 1.7rem;
    line-height: 1.4;
    color: var(--gray);
    text-shadow: 0.02rem 0.02rem var(--gray);
    opacity: 0.8;
}

@media only screen and (min-width: 768px) {
    .summary__heading--top {
        padding-top: 3.5rem;
    }
    .summary__heading {
        font-size: 3.5rem;
        line-height: 1.1;
    }
    .summary__paragraph {
        padding: 2.5rem 0 3.5rem 0;
        font-size: 1.7rem;
        font-weight: 500;
    }
}
</style>

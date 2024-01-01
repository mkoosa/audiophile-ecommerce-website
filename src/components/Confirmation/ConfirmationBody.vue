<template>
    <div class="confirmation__body">
        <div class="confirmation__products">
            <confirmation-products :class="`confirmation__items`">
            </confirmation-products>
            <confirmation-summary></confirmation-summary>
        </div>
        <div class="confirmation__total total">
            <h3 class="total__heading">{{ totalHeading }}</h3>
            <p class="total__price">$ {{ TOTAL }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import ConfirmationProducts from './ConfirmationProducts.vue';
import ConfirmationSummary from './ConfirmationSummary.vue';
import {computed, ref} from 'vue';
import {useCartStore} from '@/stores/cart';

const cartStore = useCartStore();
const totalHeading = ref('grand total');
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

.total {
    padding: 1rem 2rem;
    background: var(--light-black);
    border-radius: 0 1rem 1rem 1rem;
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
@media only screen and (min-width: 768px) {
    .confirmation__body {
        display: flex;
        border: 1rem 0 0 1rem;
    }
    .confirmation__items {
        border-radius: 1rem 1rem 0 0;
        flex-basis: 65%;
    }

    .total {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-basis: 45%;
        border-radius: 0 1rem 1rem 0;
    }
    .confirmation__products {
        flex-basis: 55%;
    }
}
</style>

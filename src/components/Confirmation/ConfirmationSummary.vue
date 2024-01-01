<template>
    <p v-if="!isDesktopView()" class="confirmation__summary">
        {{ quantity }}
    </p>
    <div v-else class="confirmation__summary confirmation__summary--desktop">
        <p
            @click="confirmationStore.lessMore()"
            class="confirmation__less-more"
        >
            {{ decide }}
        </p>
    </div>
</template>

<script setup lang="ts">
import {computed} from 'vue';
import {useCartStore} from '@/stores/cart';
import {useConfirmationStore} from '@/stores/confirmation';
import isDesktopView from '@/api/desktopView';

const confirmationStore = useConfirmationStore();
const cartStore = useCartStore();

const quantity = computed(() =>
    cartStore.orderedProducts.length === 2
        ? `and ${cartStore.orderedProducts.length - 1}  other item`
        : cartStore.orderedProducts.length > 2
        ? `and ${cartStore.orderedProducts.length - 1}  other item(s)`
        : '',
);

const decide = computed(() =>
    confirmationStore.IS_LESS ? 'View less' : 'View more',
);
</script>

<style scoped>
.confirmation__summary {
    padding: 1.5rem 0 2.5rem 0;
    text-align: center;
    color: var(--gray);
    font-weight: 600;
    font-size: 1.5rem;
}

.confirmation__less-more {
    font-size: 1.6rem;
    font-weight: 600;
    letter-spacing: 0.05rem;
    cursor: pointer;
}
</style>

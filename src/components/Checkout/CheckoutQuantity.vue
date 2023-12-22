<template>
    <div :product="product" class="summary__quantity">x{{ TOTAL_ITEMS }}</div>
</template>

<script setup lang="ts">
import {PropType, toRefs, computed} from 'vue';
import {useCartStore} from '@/stores/cart';
import type {Product} from '@/stores/types';
const cartStore = useCartStore();
const props = defineProps({
    product: {
        type: Object as PropType<Product>,
        default: {},
    },
});

const {product} = toRefs(props);

const TOTAL_ITEMS = computed(
    () => cartStore.productsQuantities[0][product.value.name],
);
</script>

<style scoped>
.summary__quantity {
    color: var(--gray);
    font-size: 1.5rem;
    font-weight: 700;
}
</style>

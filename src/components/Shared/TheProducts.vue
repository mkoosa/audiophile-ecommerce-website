<template>
    <product-card
        v-for="product in products"
        :product="product"
        v-slot:from-the-products
    >
        <router-link :to="{path: `/product/${product.id}`}">
            <action-button
                text="see product"
                :class="['main-btn', 'main-btn--orange']"
            ></action-button>
        </router-link>
    </product-card>
</template>
<script setup lang="ts">
import ProductCard from './Product/ProductCard.vue';
import ActionButton from '@/components/Shared/MainButton.vue';
import type {Product} from '@/stores/types';
import {type PropType} from 'vue';

defineProps({
    products: {
        type: Object as PropType<Product[]>,
    },
});
</script>
<style scoped>
.main-btn--orange {
    background: var(--orange);
    color: var(--white);
}

@media only screen and (min-width: 1025px) {
    .main-btn--orange {
        cursor: pointer;
        transition: all 0.2s;
    }
    .main-btn--orange:hover {
        opacity: 0.8;
        transition: all 0.2s;
    }
}
</style>

<template>
    <div class="gallery" :products="products">
        <the-cart
            v-for="product in products.gallery"
            :product="product"
            role="listitem"
            :cartClass="['gallery__item']"
            :imgWrapperClass="['gallery__img-wrapper']"
            :imgClass="['gallery__img']"
            :srcMobile="product.mobile"
            :srcTablet="product.tablet"
            :srcDesktop="product.desktop"
            alt="gallery image"
        >
        </the-cart>
    </div>
</template>

<script setup lang="ts">
import TheCart from '../TheCart.vue';
import type {Product} from '@/stores/types';
import {type PropType} from 'vue';

defineProps({
    product: {
        type: Object as PropType<Product>,
        default: {},
    },
    products: {
        type: Object as PropType<Product>,
        default: {},
    },
});
</script>
<style scoped>
.gallery {
    margin-top: 10rem;
}
</style>

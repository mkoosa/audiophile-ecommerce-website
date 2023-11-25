<template>
    <section class="gallery" :products="products">
        <the-cart
            v-for="(product, index) in products.gallery"
            role="listitem"
            :cartClass="['gallery__item', `item-${index}`]"
            :srcMobile="product.mobile"
            :srcTablet="product.tablet"
            :srcTabletSecond="product.tablet"
            :srcDesktop="product.desktop"
            alt="gallery image"
        >
        </the-cart>
    </section>
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

@media only screen and (min-width: 768px) {
    .gallery {
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-gap: 2rem;
    }
    .item-0 {
        border-radius: 1rem;
        grid-row: 1/2;
        grid-column: 1/3;
        border-radius: 1rem;
    }
    .item-1 {
        grid-row: 2/3;
        border-radius: 1rem;
        grid-column: 1/3;
        border-radius: 1rem;
    }
    .item-2 {
        grid-row: 1/-1;
        grid-column: 3/-1;
        border-radius: 1rem;
    }
    .gallery .gallery__item {
        height: 100%;
    }
}
</style>

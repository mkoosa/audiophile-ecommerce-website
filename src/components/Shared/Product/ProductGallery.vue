<template>
    <section class="gallery" :products="products">
        <the-card
            v-for="(product, index) in products.gallery"
            role="listitem"
            :cartClass="['gallery__item', `item-${index}`]"
            :srcMobile="product.mobile"
            :srcTablet="product.tablet"
            :srcTabletSecond="product.tablet"
            :srcDesktop="product.tablet"
            alt="gallery image"
        >
        </the-card>
    </section>
</template>

<script setup lang="ts">
import TheCard from '../TheCard.vue';
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
        max-height: 58.45rem;
        -ms-grid-rows: 1fr 1fr;
        -ms-grid-columns: 1fr 1fr 1fr 1fr 1fr;
    }
    .item-0,
    .item-first {
        border-radius: 1rem;
        -ms-grid-row: 1;
        -ms-grid-row-span: 1;
        grid-row: 1/2;
        -ms-grid-column: 1;
        -ms-grid-column-span: 2;
        grid-column: 1/3;
        border-radius: 1rem;
        max-height: 28rem;
    }
    .item-1,
    .item-second {
        -ms-grid-row: 2;
        -ms-grid-row-span: 1;
        grid-row: 2/3;
        border-radius: 1rem;
        -ms-grid-column: 1;
        -ms-grid-column-span: 2;
        grid-column: 1/3;
        border-radius: 1rem;
        max-height: 28rem;
    }
    .item-2,
    .item-third {
        grid-row: 1/-1;
        grid-column: 3/-1;
        border-radius: 1rem;
        max-height: 58.45rem;
    }
    .gallery .gallery__item {
        height: 100%;
    }
}
</style>

<template>
    <the-card
        :product="product"
        role="listitem"
        :key="product.id"
        :cartClass="['products__list-element', 'product']"
        :srcMobile="product.categoryImage.mobile"
        :srcTablet="product.categoryImage.tablet"
        :srcDesktop="product.categoryImage.desktop"
        :srcTabletSecond="product.categoryImage.tabletWide"
        alt="earphones"
    >
        <div class="product__left-right">
            <span v-if="product.new" class="product__extra">new Product</span>
            <div class="product__description">
                <h2 class="product__heading">{{ product.name }}</h2>
                <p class="product__paragraph">
                    {{ product.description }}
                </p>
                <slot name="from-the-products"></slot>
                <slot name="from-product-page"></slot>
            </div>
        </div>
    </the-card>
</template>

<script lang="ts">
export default {
    name: 'ProductCard',
};
</script>

<script setup lang="ts">
import TheCard from '@/components/Shared/TheCard.vue';
import type {Product} from '@/stores/types';
import {type PropType} from 'vue';

defineProps({
    product: {
        type: Object as PropType<Product>,
        default: '',
    },
});
</script>
<style scoped>
.product__heading {
    padding: 2.5rem 0;
    font-size: 2.7rem;
    line-height: 1.3;
    letter-spacing: 0.15rem;
    text-transform: uppercase;
    font-weight: 700;
}
.product .product__heading {
    padding-right: 10rem;
}
.products .product__heading {
    width: 90%;
    margin: 0 auto;
    padding-inline: 0;
    max-width: 24rem;
}
.product__paragraph {
    display: inline-block;
    margin-inline: auto;
    padding-bottom: 2.5rem;
    color: var(--gray);
    font-size: 1.5rem;
    line-height: 1.6;
    font-weight: 500;
}

.product__extra {
    margin-top: 2rem;
    color: var(--orange);
    font-size: 1.4rem;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.9rem;
    display: inline-block;
}

@media only screen and (min-width: 768px) {
    .product__heading {
        padding: 2.5rem 0rem;
        font-size: 4.5rem;
        line-height: 1.3;
        letter-spacing: 0.15rem;
        text-transform: uppercase;
        font-weight: 700;
    }

    .main .product__heading {
        font-size: 3.5rem;
        line-height: 1.15;
    }
    .product .product__left-right {
        flex-basis: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .products .product__left-right {
        flex-basis: 50%;
    }
    .product .product__heading {
        padding-right: 0;
    }
    .products .product__heading {
        width: 60%;
        max-width: initial;
    }
    .product__paragraph {
        margin-inline: auto;
        padding-bottom: 2.5rem;
        color: var(--gray);
        font-size: 1.5rem;
        line-height: 1.6;
        font-weight: 500;
    }
}

@media only screen and (min-width: 1025px) {
    .product__left-right {
        flex-basis: 50%;
        margin-left: 2rem;
        text-align: left;
    }
    .item .product__left-right {
        padding-left: 4rem;
        margin-left: 0rem;
    }
    .products .product__left-right {
        padding-right: 4rem;
    }
    .product__heading {
        padding: 1.5rem 0 0rem 0;
        font-size: 4rem;
        max-width: 30rem;
        line-height: 1.1;
    }
    .products .product__heading {
        padding-inline: 0rem;
        width: 100%;
    }
    .product__paragraph {
        margin-left: 0;
        padding: 2rem 0 5rem 0;
        max-width: 35rem;
    }
    .products__list-element:nth-child(even) .product__left-right {
        padding-right: 4em;
    }
    .products__list-element:nth-child(odd) .product__left-right {
        padding-left: 4rem;
    }
    .main-btn--orange {
        cursor: pointer;
        transition: all 0.2s;
    }
    .main-btn--orange:hover {
        opacity: 0.8;
        transition: all 0.2s;
    }
}
@media only screen and (min-width: 1200px) {
    .products__list-element:nth-child(even) .product__left-right {
        padding-right: 8rem;
    }
    .products__list-element:nth-child(odd) .product__left-right {
        padding-left: 8rem;
    }
    .item .product__left-right {
        /* padding-left: 10rem; */
        margin-left: 8rem;

        /* display: none; */
    }
}
</style>

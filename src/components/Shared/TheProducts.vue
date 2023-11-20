<template>
    <the-cart
        v-for="product in products"
        role="listitem"
        :key="product.id"
        :cartClass="['cart--product', 'products__list-element']"
        :imgWrapperClass="['cart__img-wrapper']"
        :imgClass="['cart__img']"
        :srcMobile="product.categoryImage.mobile"
        :srcTablet="product.categoryImage.tablet"
        :srcDesktop="product.categoryImage.desktop"
        alt="earphones"
    >
        <div class="cart__left-right">
            <span
                v-if="isNewProduct(product.name, productName)"
                class="cart__extra"
                >new Product</span
            >
            <div class="cart__description">
                <h2 class="cart__heading">{{ product.name }}</h2>
                <p class="cart__paragraph">
                    {{ product.description }}
                </p>
                <router-link :to="{path: `/headphones/${product.id}`}">
                    <action-button
                        text="see product"
                        :class="['main-btn', 'main-btn--orange']"
                    ></action-button>
                </router-link>
            </div>
        </div>
    </the-cart>
</template>
<script setup lang="ts">
import TheCart from '@/components/Shared/TheCart.vue';
import ActionButton from '@/components/Shared/MainButton.vue';
import type {Product} from '@/stores/types';
import {type PropType} from 'vue';

defineProps({
    products: {
        type: Object as PropType<Product[]>,
    },
    productName: {
        type: String,
        default: '',
    },
});

const isNewProduct = (product: string, productName: string) => {
    return product.includes(productName) ? true : false;
};
</script>
<style scoped>
.cart__heading {
    padding: 2.5rem 0;
    font-size: 2.7rem;
    line-height: 1.3;
    letter-spacing: 0.15rem;
    text-transform: uppercase;
    font-weight: 700;
}
.cart__paragraph {
    margin-inline: auto;
    padding-bottom: 2.5rem;
    color: var(--gray);
    font-size: 1.5rem;
    line-height: 1.6;
    font-weight: 500;
}
.main-btn--orange {
    background: var(--orange);
    color: var(--white);
}

.cart__extra {
    padding-top: 4rem !important;
    color: var(--orange);
    font-size: 1.4rem;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.9rem;
    display: inline-block;
}

@media only screen and (min-width: 668px) {
    .cart__heading {
        padding: 2.5rem 16rem;
        font-size: 4.5rem;
        line-height: 1.3;
        letter-spacing: 0.15rem;
        text-transform: uppercase;
        font-weight: 700;
    }
}

@media only screen and (min-width: 1025px) {
    .cart__left-right {
        flex-basis: 50%;
        margin-left: 2rem;
        text-align: left;
    }
    .cart__heading {
        padding: 1.5rem 0 0rem 0;
        font-size: 4rem;
        max-width: 30rem;
        line-height: 1.1;
    }
    .cart__paragraph {
        margin-left: 0;
        padding: 2rem 0 5rem 0;
        max-width: 35rem;
    }
    .cart--product:nth-child(even) .cart__left-right {
        margin-right: 10rem;
    }
    .cart--product:nth-child(odd) .cart__left-right {
        margin-left: 10rem;
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
</style>

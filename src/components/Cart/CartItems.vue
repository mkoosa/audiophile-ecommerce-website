<template>
    <ul class="cart__list-elements" :products="products">
        <li
            class="cart__list-element element"
            v-for="product in products"
            :key="product.id"
        >
            <div class="element__img-wrapper">
                <img :src="product.image.mobile" :alt="product.name" />
            </div>
            <div class="element__body">
                <h3 class="element__heading">{{ product.shortName }}</h3>
                <p class="element__price">
                    $ {{ preparePrice(product.price) }}
                </p>
            </div>
            <cart-plus-minus :product="product"></cart-plus-minus>
        </li>
    </ul>
</template>

<script setup lang="ts">
import CartPlusMinus from './CartPlusMinus.vue';
import type {Product} from '@/stores/types';
import {PropType} from 'vue';
import {preparePrice} from '@/api/preparePrice';
defineProps({
    products: {
        type: Object as PropType<Product[]>,
    },
});
</script>

<style scoped>
.cart__list-elements {
    margin-top: 2.5rem;
}
.element__img-wrapper,
.element__img-wrapper img {
    width: 7rem;
    height: 7rem;
    border-radius: 1rem;
}

.cart__list-element,
.element__calculation {
    display: inline-flex;
}

.cart__list-element {
    width: 100%;
    justify-content: space-between;
    align-items: center;
}

.cart__list-element + .cart__list-element {
    margin-top: 1.5rem;
}
.element__heading {
    font-weight: 600;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.08rem;
}

.element__body {
    min-width: 9rem;
    text-align: left;
    margin-right: auto;
    margin-left: 2rem;
}
.element__price {
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--gray);
}
.element__calculation {
    background: var(--light-grey);
}
</style>

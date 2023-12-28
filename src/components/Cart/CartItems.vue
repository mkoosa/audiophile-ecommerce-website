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
            <slot name="cart" :product="product"> </slot>
            <slot name="checkout" :product="product"> </slot>
        </li>
    </ul>
</template>

<script setup lang="ts">
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
.element__img-wrapper,
.element__img-wrapper img {
    width: 7rem;
    height: 7rem;
    border-radius: 1rem;
}

.confirmation__items .element__img-wrapper,
.confirmation__items .element__img-wrapper img {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 0.7rem;
}
.cart__list-element,
.element__calculation {
    display: flex;
}

.confirmation__items .cart__list-elements {
    padding: 2rem 0 0 0;
}
.confirmation__items .cart__list-element {
    background: var(--light-grey);
    border-radius: 1rem;
    position: relative;
}

.confirmation__items .cart__list-element:last-of-type::after {
    position: absolute;
    bottom: -0.7rem;
    left: 50%;
    transform: translateX(-50%);
    width: 85%;
    height: 0.1rem;
    content: '';
    background-color: var(--gray);
    opacity: 0.15;
}

.cart__list-element {
    width: 100%;
    justify-content: space-between;
    align-items: center;
}
.confirmation__items .cart__list-element {
    justify-content: space-around;
    align-items: start;
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
.summary .element__heading {
    font-size: 1.5rem;
    font-weight: 700;
}
.element__body {
    margin-left: 2rem;
    padding-top: 1rem;
    min-width: 9rem;
    text-align: left;
    margin-right: auto;
}
.confirmation__items .element__body {
    margin-left: 0;
    padding-top: 1rem;
    text-align: i;
    margin-right: initial;
}

.confirmation__items .element__body {
    padding-top: 0;
    margin-right: 6rem;
}
.element__price {
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--gray);
}

.summary .element__price {
    font-size: 1.4rem;
}
.element__calculation {
    background: var(--light-grey);
}
</style>

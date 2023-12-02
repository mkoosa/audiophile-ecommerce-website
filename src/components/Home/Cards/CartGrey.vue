<template>
    <the-cart
        :cartClass="['cart-grey']"
        :srcMobile="images.mobile.table"
        :srcTablet="images.tablet.table"
        :srcDesktop="images.desktop.table"
        alt="speaker om the desk"
    >
        <div class="darken"></div>
        <div class="cart-grey__content">
            <h2 class="cart-grey__heading">
                {{ cartTextValue }}
            </h2>
            <action-button
                text="see product"
                :class="['main-btn', 'main-btn--grey']"
            ></action-button>
        </div>
    </the-cart>
</template>

<script setup lang="ts">
import TheCart from '@/components/Shared/TheCart.vue';
import {computed, ref} from 'vue';
import ActionButton from '@/components/Shared/MainButton.vue';
import {useDataStore} from '@/stores/data';
const dataStore = useDataStore();
const cartTextValue = ref('zxl speaker');
const images = computed(() => dataStore.GET_CART);
</script>

<style scoped>
.cart-grey__content {
    position: absolute;
    margin-left: 2rem;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
}
.cart-grey__heading {
    color: var(--light-black);
    font-size: 2.7rem;
    text-transform: uppercase;
    line-height: 1.1;
    letter-spacing: 0.15rem;
    text-transform: uppercase;
    font-weight: 700;
}
.main-btn--grey {
    background: transparent;
    margin-top: 2.5rem;
    border: 0.15rem solid var(--light-black);
    font-weight: 700;
}
.darken {
    border-radius: 1rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.1);
}
.cart-grey__img-wrapper {
    display: none;
}
@media only screen and (min-width: 768px) {
    .cart-grey__content {
        margin-left: 5rem;
    }
    .cart-grey__heading {
        font-size: 3rem;
    }
}
@media only screen and (min-width: 1025px) {
    .cart-grey__content {
        margin-left: 6rem;
    }
    .cart-grey__heading {
        font-size: 3.3rem;
    }
}
@media only screen and (min-width: 1200px) {
    .cart-grey__content {
        margin-left: 8rem;
    }
    .cart-grey__heading {
        font-size: 3.3rem;
    }
}
</style>

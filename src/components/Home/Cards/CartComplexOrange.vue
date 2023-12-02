<template>
    <the-cart
        :cartClass="['cart-orange']"
        :srcMobile="images.mobile.column"
        :srcTablet="images.tablet.column"
        :srcDesktop="images.desktop.column"
        alt="speaker"
    >
        <div class="cart-orange__content">
            <div class="cart-orange__svg">
                <svg
                    width="944"
                    height="944"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g
                        stroke="rgba(255, 255, 255, .2)"
                        fill="none"
                        fill-rule="evenodd"
                        opacity="1"
                    >
                        <circle cx="472" cy="472" r="235.5" />
                        <circle cx="472" cy="472" r="270.5" />
                        <circle cx="472" cy="472" r="440.5" />
                    </g>
                </svg>
            </div>
            <h2 class="cart-orange__heading">
                {{ textValue.heading }}
            </h2>

            <p class="cart-orange__text">{{ textValue.cartText }}</p>
            <action-button
                text="see product"
                :class="['main-btn', 'main-btn--orange']"
            />
        </div>
    </the-cart>
</template>

<script lang="ts" setup>
import TheCart from '@/components/Shared/TheCart.vue';
import {computed, ref} from 'vue';
import {dataStore} from '@/main';
import ActionButton from '@/components/Shared/MainButton.vue';

const text = {
    cartText:
        'Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound',
    heading: 'ZX9 speaker',
};

const textValue = ref(text);
const images = computed(() => dataStore.GET_CART);
</script>

<style scoped>
.cart-orange__heading {
    margin: 1rem auto;
    font-size: 3.3rem;
    line-height: 0.9;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    font-weight: 700;
    width: min-content;
    line-height: 1.2;
}
.cart-orange__img-wrapper {
    display: none;
}
.cart-orange__text {
    margin-inline: auto;
    padding: 1rem 3rem;
    font-size: 1.5rem;
    line-height: 1.6;
    max-width: 43rem;
}
.main-btn--orange {
    margin: 2rem 0 5rem 0;
    background-color: var(--black);
    color: var(--light-grey);
    position: relative;
    z-index: 10;
}
.cart-orange__content {
    color: var(--light-grey);
}
.cart-orange__svg {
    left: 50%;
    top: 14%;
    transform: translate(-50%, -50%) scale(0.6);
    position: absolute;
    z-index: 1;
}
@media only screen and (min-width: 768px) {
    .cart-orange__heading {
        font-size: 4.5rem;
        line-height: 0.9;
    }
    .cart-orange__text {
        margin: 0 auto;
        width: 65%;
    }
    .cart-orange__svg {
        top: 5%;
        transform: translate(-50%, -50%) scale(1);
    }
}

@media only screen and (min-width: 1025px) {
    .cart-orange__content {
        padding: 10rem 0;
        margin-left: 1rem;
        text-align: left;
        flex-basis: 40%;
    }
    .cart-orange__text {
        padding: 0;
        margin: 3rem 0;
        margin-inline: initial;
        width: 95%;
        max-width: initial;
    }
    .cart-orange__heading {
        margin: 0;
        padding: 0;
    }
    .main-btn--orange {
        margin: 0;
        margin-top: 1rem;
    }
}
@media only screen and (min-width: 1200px) {
    .cart-orange__content {
        padding: 13rem 0;
    }
    .cart-orange__heading {
        font-size: 5.6rem;
        line-height: 1;
    }
}
</style>

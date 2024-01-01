<template>
    <div class="cart" :class="cartClass">
        <div class="cart__img-wrapper">
            <img class="mobile cart__img" :src="srcMobile" :alt="alt" />
            <img
                v-if="!route.meta.value"
                class="tablet cart__img"
                :src="srcTablet"
                :alt="alt"
            />
            <img
                v-if="route.meta.value"
                class="tablet cart__img"
                :src="srcTabletSecond"
                :alt="alt"
            />
            <img class="desktop cart__img" :src="srcDesktop" :alt="alt" />
        </div>
        <slot name="extra"></slot>
        <slot> </slot>
    </div>
</template>

<script lang="ts" setup>
import {useRoute} from 'vue-router';

const route = useRoute();
defineProps({
    cartClass: {
        type: Array,
    },
    srcMobile: {
        type: String,
    },
    srcTablet: {
        type: String,
    },
    srcTabletSecond: {
        type: String,
    },
    srcDesktop: {
        type: String,
    },
    alt: {
        type: String,
        required: true,
    },
});
</script>

<style scoped>
.cart {
    margin-bottom: 2.5rem;
    overflow: hidden;
}
.img.mobile {
    border-radius: 1rem;
}

img.tablet {
    display: none;
}
img.desktop {
    display: none;
}

/* cartComplexOrange  */
.cart-orange {
    background-color: var(--orange);
    text-align: center;
    border-radius: 1rem;
    overflow: hidden;
}
.cart-orange .cart__img-wrapper {
    margin: 0 auto;
    padding: 5rem 0 3rem 0;
    width: 35%;
    max-width: 13rem;
}
.cart-orange__img {
    width: 100%;
}
/* end of cartComplexOrange  */

/* cartGrey  */
.cart-grey {
    max-height: 35rem;
    position: relative;
    border-radius: 1rem;
}
.cart-grey .cart__img-wrapper {
    border-radius: 1rem;
    height: 100%;
    position: relative;
}
.cart-grey .cart__img {
    width: 100%;
}
/* end of cartGrey  */

/* cartComplexGrey  */
.cart-complex-grey .cart__img-wrapper,
.cart-complex-grey .cart__img {
    width: 100%;
    border-radius: 1rem;
}
/* end of cartComplexGrey  */

/* about  */
.about {
    border-radius: 1rem;
}
.about-us .cart__img-wrapper,
.about-us .cart__img {
    width: 100%;
    border-radius: 1rem;
}
/* end of about  */

/* product */

.products__list-element + .products__list-element {
    margin-top: 11rem;
}

.cart__img-wrapper,
.cart__img {
    margin: 0 auto;
    border-radius: 1rem;
}
/* end of product */

/* may like component  */
.may-like__list-item + .may-like__list-item {
    margin-top: 6rem;
}

/* end may like component  */

@media only screen and (min-width: 768px) {
    .gallery .cart__img-wrapper {
        height: 100%;
    }

    .gallery .cart__img {
        height: 100%;
    }
    img.mobile {
        display: none;
    }
    img.tablet {
        display: block;
        border-radius: 1rem;
    }
    img.desktop {
        display: none;
    }
    img.cart__img--grey {
        width: 100%;
    }

    /* cartComplexOrange  */
    .cart-orange {
        padding: 4rem 0;
    }
    .cart-orange .cart__img-wrapper {
        width: 20vw;
        max-width: 17rem;
        margin-right: auto !important;
    }
    /* end of cartComplexOrange  */

    /* cartComplexGrey  */
    .cart-complex-grey {
        display: flex;
    }
    .cart-complex-grey .cart__img-wrapper {
        margin-right: 1.5rem;
        flex-basis: 50%;
    }

    /* end of cartComplexGrey  */
    /* product cart  */
    .cart .cart__img-wrapper {
        flex-basis: 50%;
        margin-right: 5rem;
        width: 100%;
    }

    /* end of product cart  */
    /* the cart  */

    .product .cart__img {
        width: 100%;
    }
    /* ond of the cart  */
    .d-flex {
        display: flex;
    }
    /* may like component  */
    .may-like__list-item + .may-like__list-item {
        margin-top: 0rem;
        margin-left: 5.5rem;
    }

    /* end may like component  */
}

@media only screen and (min-width: 1025px) {
    img.mobile {
        display: none;
    }
    img.tablet {
        display: none;
    }
    img.desktop {
        display: block;
        border-radius: 1rem;
    }

    /* CartComplexOrange   */
    .cart-orange {
        padding: 0;
        justify-content: space-evenly;
        display: flex;
    }

    .cart-orange .cart__img-wrapper {
        margin: 0;
        position: relative;
        max-width: initial;
        flex-basis: 40%;
    }
    .cart-orange img {
        max-width: 80%;
        position: absolute;
        bottom: -1rem;
    }
    /* end of CartComplexOrange   */

    .item .cart__img-wrapper {
        margin-right: 5rem;
    }
    /* about */
    .about {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 5rem;
        align-items: center;
    }

    .products__list-element {
        display: flex;
        align-items: center;
    }
    .products__list-element + .products__list-element {
        margin-top: 0rem;
    }
    .products .products__list-element:nth-child(even) {
        flex-direction: row-reverse;
        margin: 16rem 0;
    }

    .gallery .cart__img {
        height: 100%;
        max-height: 58.4rem;
    }
    .products .cart__img-wrapper {
        flex-basis: 50%;
    }
    .cart__img {
        width: 100%;
    }
    .cart__heading {
        padding: 0;
    }
    /*end of  cart product  */
    .may-like__list-item + .may-like__list-item {
        margin-left: 4rem;
    }
}
@media only screen and (min-width: 1200px) {
    .cart {
        margin-bottom: 5rem;
    }
    /* CartComplexOrange   */

    .cart-orange img {
        max-width: 85%;
    }
    /* end of CartComplexOrange   */
    .may-like__list-item + .may-like__list-item {
        margin-left: rem;
    }
}
</style>

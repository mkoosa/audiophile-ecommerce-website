<template>
    <div class="cart" :class="cartClass">
        <div :class="imgWrapperClass">
            <img
                class="mobile cart__img"
                :class="imgClass"
                :src="srcMobile"
                :alt="alt"
            />
            <img
                class="tablet cart__img"
                :class="imgClass"
                :src="srcTablet"
                :alt="alt"
            />
            <img
                class="desktop cart__img"
                :class="imgClass"
                :src="srcDesktop"
                :alt="alt"
            />
        </div>
        <slot name="extra"></slot>
        <slot> </slot>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    cartClass: {
        type: Array,
    },
    imgWrapperClass: {
        type: Array,
    },
    imgClass: {
        type: Array,
    },
    srcMobile: {
        type: String,
    },
    srcTablet: {
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
    /* border-radius: 1rem; */
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
.cart-orange__img-wrapper {
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
.cart-grey__img-wrapper {
    border-radius: 1rem;
    height: 100%;
    position: relative;
}
.cart-grey__img {
    width: 100%;
}
/* end of cartGrey  */

/* cartComplexGrey  */
.cart-complex-grey__img-wrapper,
.cart-complex-grey__img {
    width: 100%;
    border-radius: 1rem;
}
/* end of cartComplexGrey  */

/* about  */
.about {
    border-radius: 1rem;
}
.about__img-wrapper,
.about__img {
    width: 100%;
    border-radius: 1rem;
}

/* end of about  */

/* product */

.products__list-element {
    /* border-radius: 1rem; */
}
.products__list-element + .products__list-element {
    margin-top: 11rem;
}

.cart__img-wrapper,
.cart__img {
    margin: 0 auto;
    border-radius: 1rem;
    /* max-width: 45rem; */
}
/* end of product */
/* product cart  */
.product__cart .cart__img-wrapper {
    margin: 0 auto;
    max-width: 44rem;
}
/* end of product cart  */

@media only screen and (min-width: 668px) {
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
    .cart-orange__img-wrapper {
        width: 20vw;
        max-width: 17rem;
    }
    /* end of cartComplexOrange  */

    /* cartComplexGrey  */
    .cart-complex-grey {
        display: flex;
    }
    .cart-complex-grey__img-wrapper {
        margin-right: 1.5rem;
        flex-basis: 50%;
    }

    /* end of cartComplexGrey  */
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

    .cart-orange__img-wrapper {
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

    /* about */
    .about {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 5rem;
        align-items: center;
    }
    .about__img-wrapper {
        grid-row: 1/2;
        grid-column: 2/3;
    }
    .about__content {
        grid-row: 1/2;
        grid-column: 1/2;
    }
    /* end of about */
    /* cart product  */
    .cart--product {
        display: flex;
        align-items: center;
    }
    .products__list-element + .products__list-element {
        margin-top: 0rem;
    }
    .cart--product:nth-child(even) {
        flex-direction: row-reverse;
        margin: 16rem 0;
    }
    /* .cart--product:nth-child(even) {
        background-color: aqua;
    } */
    .cart__img-wrapper {
        flex-basis: 50%;
    }
    .cart__img {
        width: 100%;
    }
    .cart__heading {
        padding: 0;
    }
    /*end of  cart product  */
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
}
</style>

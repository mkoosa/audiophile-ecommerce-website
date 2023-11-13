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
    border-radius: 1rem;
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

/* cartImg  */
.cart__img--img {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
}
/* end of cartImg  */

/* cartOrange  */
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
/* end of cartOrange  */

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

/* cartComplex  */
.cart-complex-grey__img-wrapper,
.cart-complex-grey__img {
    width: 100%;
    border-radius: 1rem;
}
/* end of cartComplex  */

@media only screen and (min-width: 768px) {
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

    /* cartOrange  */
    .cart-orange {
        padding: 4rem 0;
    }
    .cart-orange__img-wrapper {
        width: 20vw;
        max-width: 17rem;
    }
    /* end of cartOrange  */

    /* cartComplex  */
    .cart-complex-grey {
        display: flex;
    }
    .cart-complex-grey__img-wrapper {
        margin-right: 1.5rem;
        flex-basis: 50%;
    }
    /* end of cartComplex  */
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

    /* CartOrange   */
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
    /* end of CartOrange   */
}

@media only screen and (min-width: 1200px) {
    /* CartOrange   */

    .cart-orange img {
        max-width: 85%;
    }
    /* end of CartOrange   */
}
</style>

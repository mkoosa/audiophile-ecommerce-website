<template>
    <the-cart
        :cartClass="['cart-complex-grey']"
        :srcMobile="images.mobile.headphones"
        :srcTablet="images.tablet.headphones"
        :srcDesktop="images.desktop.headphones"
        alt="earphones"
    >
        <div class="cart-complex-grey__body">
            <div class="cart-complex-grey__content">
                <h2 class="cart-complex-grey__heading">
                    {{ cartTextValue.heading }}
                </h2>
                <action-button
                    @click="
                        openProductPage(
                            cartTextValue.name,
                            productsStore,
                            router,
                        )
                    "
                    text="see product"
                    :class="['main-btn', 'main-btn--transparent']"
                ></action-button>
            </div>
        </div>
    </the-cart>
</template>

<script setup lang="ts">
import TheCart from '@/components/Shared/TheCart.vue';
import ActionButton from '@/components/Shared/MainButton.vue';
import {ref} from 'vue';
import {computed} from 'vue';
import {openProductPage} from '@/api/getData';
import {useProductsStore} from '@/stores/products';
import {dataStore} from '@/main';
import {useRouter} from 'vue-router';

const router = useRouter();
const productsStore = useProductsStore();
const images = computed(() => dataStore.GET_CART);
const textListing = {
    name: 'YX1 Wireless Earphones',
    heading: 'YX1 Earphones',
};

const cartTextValue = ref(textListing);
</script>

<style scoped>
.cart-complex {
    border-radius: 1rem;
}
.cart-complex-grey__body {
    margin-top: 2rem;
    padding: 4rem 0;
    background: var(--light-grey);
    border-radius: 1rem;
}
.cart-complex-grey__content {
    margin-left: 2rem;
}
.cart-complex-grey__heading {
    letter-spacing: 0.15rem;
    margin-bottom: 3rem;
    font-size: 2.7rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--light-black);
}

.main-btn--transparent {
    border: 0.15rem solid var(--light-black);
    font-weight: 700;
    background: transparent;
}
@media only screen and (min-width: 768px) {
    .cart-complex-grey__body {
        margin: 0;
        flex-basis: 50%;
    }
    .cart-complex-grey__content {
        margin-left: 4rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        height: 100%;
    }
    .cart-complex-grey__heading {
        font-size: 3rem;
    }
}
@media only screen and (min-width: 1025px) {
    .cart-complex-grey__heading {
        font-size: 3.3rem;
    }
}
</style>

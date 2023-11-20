<template>
    <section class="products">
        <header class="products__header">
            <h1 class="products__header-heading">headphones</h1>
        </header>
        <div role="list" class="products__list indent">
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
                    <extra v-if="isNewProduct(product.name)" class="cart__extra"
                        >new Product</extra
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
        </div>
    </section>
</template>

<script lang="ts">
import TheCart from '@/components/Shared/TheCart.vue';
import ActionButton from '@/components/Shared/MainButton.vue';

import {getDatabase, onValue, ref} from 'firebase/database';
import {headphonesStore as store} from '@/main';
import {ref as vueRef} from 'vue';
const db = getDatabase();
const starCountRef = ref(db, 'products');
const isDataLoaded = vueRef(false);

export default {
    name: 'ProductCart',
    components: {TheCart, ActionButton},
    beforeRouteEnter(to) {
        if (to.name === 'HeadPhones') {
            if (store.GET_DATA.length !== 0) return;
            onValue(starCountRef, (snapshot) => {
                const value = snapshot.val();
                store.populateData(value);
                store.checkIfDataIsLoaded();
                if (store.isDataLoaded) isDataLoaded.value = true;
            });
        }
    },
    computed: {
        products() {
            return store.GET_DATA;
        },
        // productPageLink() {
        //     return `/headphones/${this.products.id}`;
        // },
    },

    methods: {
        isNewProduct(product: string) {
            return product.includes('Mark II') ? true : false;
        },
    },
};
</script>

<style scoped>
.products {
    background-color: var(--white);
    text-align: center;
}
.products__list {
    padding-top: 6rem;
    padding-bottom: 6rem;
}
.products__header {
    background: var(--light-black);
    color: var(--white);
}

.products__header-heading {
    padding: 3rem 0;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 2.8rem;
    letter-spacing: 0.25rem;
}

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
    .products__header-heading {
        padding: 8rem 0;
        font-weight: 700;
        font-size: 4rem;
        letter-spacing: 0.4rem;
    }
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

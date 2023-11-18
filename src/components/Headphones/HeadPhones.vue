<template>
    <section class="headphones">
        <header class="headphones__header">
            <h1 class="headphones__heading">headphones</h1>
        </header>
        <div class="headphones__carts indent">
            <div v-for="product in products" :key="product.id">
                <the-cart
                    :cartClass="['']"
                    :imgWrapperClass="['cart__img-wrapper']"
                    :imgClass="['cart__img']"
                    :srcMobile="product.categoryImage.mobile"
                    :srcTablet="product.categoryImage.tablet"
                    :srcDesktop="product.categoryImage.desktop"
                    alt="earphones"
                ></the-cart>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import TheCart from '@/components/Shared/TheCart.vue';
import {getDatabase, onValue, ref} from 'firebase/database';
import {headphonesStore as store} from '@/main';
import {ref as vueRef} from 'vue';
const db = getDatabase();
const starCountRef = ref(db, 'products');
const isDataLoaded = vueRef(false);

export default {
    name: 'ProductCart',
    components: {TheCart},
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
    },
};
</script>

<style scoped>
.headphones {
    background-color: var(--white);
}
.headphones__header {
    background: var(--light-black);
    color: var(--light-grey);
}

.headphones__heading {
    padding: 2.5rem 0;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 2.4rem;
    letter-spacing: 0.2rem;
}
</style>

<template>
    <section class="products">
        <header class="products__header">
            <h1 class="products__header-heading">headphones</h1>
        </header>
        <div role="list" class="products__list indent">
            <the-products
                :products="products"
                productName="Mark II"
            ></the-products>
        </div>
    </section>
</template>

<script lang="ts">
import TheProducts from '../Shared/TheProducts.vue';
import {getDatabase, onValue, ref} from 'firebase/database';
import {headphonesStore as store} from '@/main';
import {ref as vueRef} from 'vue';
const db = getDatabase();
const starCountRef = ref(db, 'products');
const isDataLoaded = vueRef(false);

export default {
    components: {TheProducts},

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
            console.log(store.GET_DATA);
            return store.GET_DATA;
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

@media only screen and (min-width: 1025px) {
    .products__header-heading {
        padding: 8rem 0;
        font-weight: 700;
        font-size: 4rem;
        letter-spacing: 0.4rem;
    }
}
</style>

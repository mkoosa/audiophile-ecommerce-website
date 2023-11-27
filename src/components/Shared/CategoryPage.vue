<template :category="category" :store="store">
    <section class="products">
        <header class="products__header">
            <h1 class="products__header-heading">{{ header }}</h1>
        </header>
        <div role="list" class="products__list indent">
            <the-products :products="products"></the-products>
        </div>
    </section>
</template>

<script setup lang="ts">
import TheProducts from '../Shared/TheProducts.vue';
import {onBeforeMount, computed, toRefs} from 'vue';
import {getData} from '@//api/getData';

const products = computed(() => store.value.GET_DATA);

const props = defineProps({
    header: {
        type: String,
    },
    category: {
        type: String,
        default: '',
    },
    store: {
        type: Object,
        default: {},
    },
});

const {category} = toRefs(props);
const {store} = toRefs(props);

onBeforeMount(() => {
    getData(store.value, category.value);
});
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
        padding: 5rem 0;
        font-weight: 700;
        font-size: 4rem;
        letter-spacing: 0.4rem;
    }
}
</style>

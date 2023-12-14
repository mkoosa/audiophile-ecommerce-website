<template>
    <div class="wrapper">
        <the-header></the-header>
        <the-main v-if="isDataLoaded"></the-main>
        <the-categories
            :class="['category__list--wrapper']"
            v-if="route.path !== '/' && route.path !== '/checkout'"
        ></the-categories>
        <about-us v-if="isDataLoaded && route.path !== '/checkout'"></about-us>
        <the-footer></the-footer>
    </div>
</template>

<script lang="ts" setup>
import TheHeader from '@/components/View/TheHeader.vue';
import TheMain from '@/components/View/TheMain.vue';
import AboutUs from '../Shared/AboutUs.vue';
import TheCategories from '@/components/Shared/TheCategories.vue';
import TheFooter from '@/components/Footer/TheFooter.vue';
import {useRoute} from 'vue-router';
import {dataStore} from '@/main';
import {ref as vueRef, onMounted} from 'vue';
import {getDatabase, onValue, ref} from 'firebase/database';
import {getData} from '@//api/getData';
import {useProductsStore} from '@/stores/products';

const productsStore = useProductsStore();
const route = useRoute();

const isDataLoaded = vueRef(false);
const db = getDatabase();
const starCountRef = ref(db, 'data');

//fetch data for data store
onValue(starCountRef, (snapshot) => {
    const value = snapshot.val();
    dataStore.populateData(value);
    dataStore.checkIfDataIsLoaded();
    if (dataStore.isDataLoaded) isDataLoaded.value = true;
});

//fetch data for products store
onMounted(() => {
    getData(productsStore, 'products');
});
</script>

<style scoped>
.wrapper {
    margin-inline: auto;
    max-width: 140rem;
    background: var(--white);
}
</style>

<template>
    <div class="wrapper">
        <the-header></the-header>
        <the-main v-if="isDataLoaded"></the-main>
        <about-us v-if="isDataLoaded"></about-us>
        <div>FOOTER</div>
    </div>
</template>

<script lang="ts" setup>
import TheHeader from '@/components/View/TheHeader.vue';
import TheMain from '@/components/View/TheMain.vue';
import AboutUs from '../Shared/AboutUs.vue';
import {dataStore} from '@/main';
import {ref as vueRef} from 'vue';
import {getDatabase, onValue, ref} from 'firebase/database';

const isDataLoaded = vueRef(false);
const db = getDatabase();
const starCountRef = ref(db, 'data');

onValue(starCountRef, (snapshot) => {
    const value = snapshot.val();
    dataStore.populateData(value);
    dataStore.checkIfDataIsLoaded();
    if (dataStore.isDataLoaded) isDataLoaded.value = true;
});
</script>

<style scoped>
.wrapper {
    margin-inline: auto;
    max-width: 140rem;
    background: var(--light-black);
}
</style>

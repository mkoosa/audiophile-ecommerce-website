<template>
    <div class="wrapper">
        <the-header></the-header>
        <the-main></the-main>
        <div>FOOTER</div>
    </div>
</template>

<script lang="ts" setup>
import TheHeader from '@/components/View/TheHeader.vue';
import TheMain from '@/components/View/TheMain.vue';
import {dataStore} from '@/main';
import {getDatabase, onValue, ref} from 'firebase/database';

const db = getDatabase();
const starCountRef = ref(db, 'data');
onValue(starCountRef, (snapshot) => {
    const value = snapshot.val();
    dataStore.populateData(value);
    dataStore.checkIfDataIsLoaded();
});
</script>

<style scoped>
.wrapper {
    margin-inline: auto;
    max-width: 140rem;
    background: var(--light-black);
}
</style>

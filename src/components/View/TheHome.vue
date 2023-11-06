<template>
    <div class="wrapper">
        <the-header />
        <the-main />
    </div>
</template>

<script lang="ts" setup>
import TheHeader from '@/components/Header/TheHeader.vue';
import TheMain from '@/components/Main/TheMain.vue';
import {useDataStore} from '@/stores/data';
import {getDatabase, onValue, ref} from 'firebase/database';

const dataStore = useDataStore();
const db = getDatabase();
const starCountRef = ref(db, 'data');
onValue(starCountRef, (snapshot) => {
    const value = snapshot.val();
    console.log(value);
    dataStore.populateData(value);
});
</script>

<style scoped>
.wrapper {
    margin-inline: auto;
    max-width: 140rem;
    background: var(--light-black);
}
</style>

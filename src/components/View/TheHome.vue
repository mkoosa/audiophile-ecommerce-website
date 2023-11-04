<template>
    <div class="wrapper">
        <the-header />
    </div>
</template>

<script lang="ts" setup>
import TheHeader from '@/components/Header/TheHeader.vue';
import {useDataStore} from '@/stores/data';
import {getDatabase, onValue, ref} from 'firebase/database';
const dataStore = useDataStore();
const db = getDatabase();
const starCountRef = ref(db, 'data');
onValue(starCountRef, (snapshot) => {
    const value = snapshot.val();

    //populate dataStore from Firebase
    dataStore.$patch({data: value});
});
</script>

<style scoped>
.wrapper {
    margin-inline: auto;
    max-width: 140rem;
    background: var(--light-black);
}
</style>

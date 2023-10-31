<template>
    <div class="wrapper">
        <the-header />
    </div>
</template>

<script lang="ts" setup>
import {onMounted} from 'vue';
import TheHeader from '@/components/Header/TheHeader.vue';
import useDataStore from '@/stores/data';

const dataStore = useDataStore();

onMounted(async () => await dataStore.FETCH_DATA());
</script>

<style scoped>
.wrapper {
    margin-inline: auto;
    max-width: 140rem;
    background: var(--light-black);
}
</style>

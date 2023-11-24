<template>
    <p role="button" @click="back()" class="back indent">go back</p>
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router';
const route = useRouter();

const back = () => route.push({path: '/headphones'});
</script>

<style scoped>
.back {
    padding-top: 2rem;
    /* padding: 0.5rem; */
    text-transform: capitalize;
    color: var(--gray);
    font-size: 1.5rem;
    font-weight: 600;
    /* background: green; */
}
</style>

<template>
    <p role="button" @click="back()" class="back">go back</p>
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router';
const route = useRouter();

const back = () => route.push({path: '/headphones'});
</script>

<style scoped>
.back {
    /* background: red; */
    /* padding-top: 2rem; */
    padding: 1rem 0;
    margin-bottom: 1rem;
    text-transform: capitalize;
    color: var(--gray);
    font-size: 1.5rem;
    font-weight: 600;
}
@media only screen and (min-width: 1025px) {
    .back {
        cursor: pointer;
    }
}
</style>

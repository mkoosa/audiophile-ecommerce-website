<template>
    <p role="button" @click="back()" class="back">go back</p>
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router';
const router = useRouter();
const back = () => router.go(-1);
</script>

<style scoped>
.back {
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
        transition: color 0.2s;
    }
    .back:hover {
        color: var(--orange);
        transition: color 0.2s;
    }
}
</style>

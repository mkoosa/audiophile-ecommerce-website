<template>
    <div class="wrapper">
        <the-header />
    </div>
</template>

<script lang="ts" setup>
import TheHeader from '@/components/Header/TheHeader.vue';
</script>

<style scoped>
.wrapper {
    margin-inline: auto;
    max-width: 140rem;
    background: var(--light-black);
}
</style>

<template>
    <div class="categories">
        <main-category />
    </div>
</template>

<script lang="ts" setup>
import MainCategory from '@/components/Main/MainCategory.vue';
</script>

<style>
.categories {
    background: var(--light-grey);
    padding: 2rem 2rem;
}

@media only screen and (min-width: 769px) {
    .categories {
        padding: 6rem 2rem 3rem 2rem;
        width: 100%;
        display: flex;
        flex-wrap: nowrap;
    }
}
</style>

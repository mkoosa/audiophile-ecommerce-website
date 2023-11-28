<template>
    <category-page
        header="headphones"
        category="products"
        :store="store"
    ></category-page>
</template>

<script setup lang="ts">
import CategoryPage from '../Shared/CategoryPage.vue';
import {productsStore as store} from '@/main';
</script>

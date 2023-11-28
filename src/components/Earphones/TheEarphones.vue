<template>
    <category-page
        header="earphones"
        category="products"
        :store="store"
    ></category-page>
</template>

<script setup lang="ts">
import CategoryPage from '../Shared/CategoryPage.vue';
import {headphonesStore as store} from '@/main';
</script>

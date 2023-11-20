<template>
    <div class="product">The Product {{ route.params.id }}</div>
</template>

<script setup lang="ts">
import {useRoute} from 'vue-router';

const route = useRoute();
</script>

<style scoped>
.product {
    color: red;
    height: 100vh;
    justify-content: center;
    align-items: center;
}
</style>

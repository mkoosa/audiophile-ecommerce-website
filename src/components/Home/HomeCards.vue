<template>
    <section class="cards indent">
        <cart-orange></cart-orange>
        <cart-grey></cart-grey>
        <cart-complex-grey></cart-complex-grey>
    </section>
</template>

<script setup lang="ts">
import CartOrange from '@/components/Home/Cards/CartComplexOrange.vue';
import CartGrey from '@/components/Home/Cards/CartGrey.vue';
import CartComplexGrey from '@/components/Home/Cards/CartComplexGrey.vue';
</script>
<style scoped>
.cards {
    margin-top: 7rem;
    position: relative;
    overflow: hidden;
}
</style>

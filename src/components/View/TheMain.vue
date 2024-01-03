<template>
    <main class="main">
        <router-view v-slot="{Component}">
            <keep-alive include="TheCheckout">
                <component :is="Component"></component>
            </keep-alive>
        </router-view>
    </main>
</template>

<script setup lang="ts"></script>

<style scoped>
.main {
    margin-top: 8rem;
    background-color: var(--white);
}
</style>

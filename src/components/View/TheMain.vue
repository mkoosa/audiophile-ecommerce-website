<template>
    <main class="main">
        <router-view v-slot="{Component}">
            <keep-alive include="Product">
                <component :is="Component" />
            </keep-alive>
        </router-view>
    </main>
</template>
<script lang="ts"></script>
<style scoped>
.main {
    margin-top: 8rem;
    background-color: var(--white);
}
</style>

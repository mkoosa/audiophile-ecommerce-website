<template>
    <div class="cart__header">
        <div class="cart__close">
            <font-awesome-icon
                :class="['close-cart-icon']"
                @click="onClose"
                :icon="['fas', 'xmark']"
            />
        </div>
        <div class="cart__header-content">
            <h2 class="cart__heading">cart (3)</h2>
            <p class="cart__remove">remove all</p>
        </div>
    </div>
</template>

<script setup lang="ts">
const onClose = () => console.log('ok');
</script>

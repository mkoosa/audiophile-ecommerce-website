<template>
    <div class="cart">
        <header class="cart__header">
            <h2 class="cart__heading">
                cart<span class="cart__quantity">3</span>
            </h2>
            <p class="cart__remove">remove all</p>
        </header>
        <div class="cart__body">
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
        </div>
        <footer class="cart__footer">
            <div>
                <h2 class="cart__total">total</h2>
                <p class="cart__total-price">$<span>6,00</span></p>
            </div>
            <action-button
                text="checkout"
                :class="['cart__btn main-btn main-btn--orange']"
            ></action-button>
        </footer>
    </div>
</template>

<script setup lang="ts">
import ActionButton from '@/components/Shared/ActionButton.vue';
</script>

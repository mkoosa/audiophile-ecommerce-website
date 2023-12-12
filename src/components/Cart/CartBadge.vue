<template>
    <div
        class="badge-a hide"
        @animationend="removeAnimationClass"
        ref="cartRef"
    >
        <p class="badge-a__quantity">
            {{ cartStore.PRODUCTS_IN_CART.length }}
        </p>
    </div>
</template>

<script setup lang="ts">
import {watch, ref} from 'vue';
import {useCartStore} from '@/stores/cart';
const cartStore = useCartStore();
const cartRef = ref<HTMLElement | null>(null);

watch(
    () => cartStore.orderedProducts.length,
    () => {
        if (cartRef.value == null) return;
        console.log('ok');
        cartRef.value.classList.remove('hide');
        cartRef.value.classList.add('animate__heartBeat');
        if (cartStore.PRODUCTS_IN_CART.length == 0)
            cartRef.value.classList.add('hide');
    },
);

const removeAnimationClass = () => {
    if (cartRef.value == null) return;
    cartRef.value.classList.remove('animate__heartBeat');
};
</script>

<style scoped>
.badge-a {
    position: absolute;
    bottom: 2.2rem;
    left: 1rem;
    height: 2rem;
    width: 2.3rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--orange);
}
.badge-a__quantity {
    color: var(--white);
    font-size: 1.2rem;
    font-weight: 700;
}

.hide {
    display: none;
}

.show {
    display: flex;
}
.animate__heartBeat {
    animation-name: heartBeat;
    animation-timing-function: ease-in-out;
    animation-duration: 0.8s;
    animation-fill-mode: both;
}
@keyframes heartBeat {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }

    14% {
        -webkit-transform: scale(1.3);
        transform: scale(1.3);
    }

    28% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }

    42% {
        -webkit-transform: scale(1.3);
        transform: scale(1.3);
    }

    70% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}
</style>

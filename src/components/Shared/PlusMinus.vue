<template>
    <!-- <div class="plus-minus" :product="product" v-if="product !== undefined"> -->
    <div class="plus-minus" :product="product">
        <p @click="removeItem()" class="minus">-</p>
        <p class="total">{{ TOTAL_ITEMS }}</p>
        <p @click="addItem()" class="plus">+</p>
    </div>
</template>
<script setup lang="ts">
import {PropType, toRefs, computed} from 'vue';
import type {Product} from '@/stores/types';
import {useCartItemStore} from '@/stores/cartItem';

const props = defineProps({
    product: {
        type: Object as PropType<Product>,
        default: {},
    },
});

const cartItemStore = useCartItemStore();
const {product} = toRefs(props);

const addItem = () => {
    cartItemStore.addItem(product.value);
};
const removeItem = () => {
    if (!cartItemStore.items.length) return;
    cartItemStore.removeItem(product.value);
};

const TOTAL_ITEMS = computed(() => {
    let target = cartItemStore.items.filter(
        (item) => item.name === product?.value.name,
    );
    return target.length < 1 ? 0 : target[0]?.count;
});
</script>

<style scoped>
.plus-minus {
    display: flex;
    padding: 0.5em 2em;
    width: 11rem;
    justify-content: space-around;
    background: var(--light-grey);
    align-items: center;
}

.plus,
.minus {
    font-size: 2rem;
    color: var(--gray);
    font-weight: 600;
}
.plus {
    margin-left: 2rem;
}
.minus {
    margin-right: 2rem;
}
.total {
    font-size: 1.6rem;
    font-weight: 600;
}

@media only screen and (min-width: 1025px) {
    .plus,
    .minus {
        cursor: pointer;
    }
}
</style>

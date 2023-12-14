<template>
    <div class="plus-minus" :product="product">
        <p @click="decreaseQuantity()" class="minus">-</p>
        <p class="total">{{ TOTAL_ITEMS }}</p>
        <p @click="increaseQuantity()" class="plus">+</p>
    </div>
</template>
<script setup lang="ts">
import {useCartStore} from '@/stores/cart';
import {PropType, toRefs, computed} from 'vue';
import type {Product} from '@/stores/types';

const cartStore = useCartStore();

const props = defineProps({
    product: {
        type: Object as PropType<Product>,
        default: {},
    },
});

const {product} = toRefs(props);

const increaseQuantity = () => {
    cartStore.increaseProductQuantity(product.value);
    cartStore.calculateCartTotalProductsValue();
};
const decreaseQuantity = () => {
    cartStore.decreaseProductQuantity(product.value);
    cartStore.calculateCartTotalProductsValue();
};

const TOTAL_ITEMS = computed(
    () => cartStore.productsQuantities[0][product.value.name],
);
</script>

<style scoped>
.plus-minus {
    width: 10rem;
    display: flex;
    padding: 0.5rem 0;
    justify-content: space-evenly;
    background: var(--light-grey);
    align-items: center;
}

.plus,
.minus {
    text-align: center;
    font-size: 1.7rem;
    color: var(--gray);
    font-weight: 600;
    width: 100%;
}
.plus {
    margin-left: 1.8rem;
}
.minus {
    margin-right: 1.8rem;
}
.total {
    font-size: 1.5rem;
    font-weight: 700;
}

@media only screen and (min-width: 768px) {
    .plus-minus {
        padding: 0.5rem;
    }
}
@media only screen and (min-width: 1025px) {
    .plus,
    .minus {
        cursor: pointer;
    }
}
</style>

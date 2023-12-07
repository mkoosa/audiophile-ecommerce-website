<template>
    <div class="plus-minus" :product="product" v-if="product !== undefined">
        <p @click="cartStore.removeItem(product)" class="minus">-</p>
        <p class="total">{{ GET_TOTAL }}</p>
        <p @click="cartStore.addItem(product)" class="plus">+</p>
    </div>
</template>
<script setup lang="ts">
import {PropType, toRefs, ref, computed} from 'vue';
import type {Product} from '@/stores/types';
import {useCartItemStore} from '@/stores/cartItem';
const cartStore = useCartItemStore();

const props = defineProps({
    product: {
        type: Object as PropType<Product>,
    },
});
const {product} = toRefs(props);
const total = ref(0);

// const add = () => {
//     total.value++;
//     if (product?.value === undefined) return;
//     cartStore.addItem(product.value);
// };
// const remove = () => {
//     if (product?.value === undefined) return;
//     cartStore.removeItem(product.value);
//     return total.value < 1 ? (total.value = 0) : total.value--;
// };

const GET_TOTAL = computed(() => total.value);
</script>

<style scoped>
.plus-minus {
    display: flex;
    padding: 0.5em 2em;
    width: 11rem;
    /* width: 36%; */
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
@/stores/cartItem

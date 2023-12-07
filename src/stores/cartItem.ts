import {defineStore} from 'pinia';
import {computed, ref} from 'vue';

import type {Product} from './types';
export const useCartItemStore = defineStore('cartItem', () => {
    const items = ref(<Product[]>[]);
    const totalItems = ref(0);
    const totalCost = ref(0);

    const addItem = (item: Product) => {
        let targetItem = items.value.filter(
            (currItem) => currItem.id === item.id,
        )[0];
        if (targetItem) targetItem.count += 1;
        else items.value = [...items.value, {...item, count: 1}];
        totalItems.value += 1;
        totalCost.value += item.price;
    };

    const removeItem = (item: Product) => {
        if (totalItems.value < 1) return;
        let targetItem = items.value.filter(
            (currItem) => currItem.id === item.id,
        )[0];

        if (targetItem.count === 1) {
            items.value = items.value.filter(
                (currItem) => currItem.id !== item.id,
            );
        } else items.value = [...items.value];
        targetItem.count -= 1;
        totalItems.value -= 1;
        totalCost.value -= item.price;
    };

    const GET_TOTAL_ITEMS = computed(() => totalItems.value);

    return {items, addItem, removeItem, totalItems, totalCost, GET_TOTAL_ITEMS};
});

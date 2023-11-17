import {defineStore} from 'pinia';
import {computed, ref} from 'vue';

import type {Data} from '@/stores/types';
export const useDataStore = defineStore('data', () => {
    const carts: Partial<Data> = {};

    const isDataLoaded = ref(false);
    const data = ref(carts);

    const GET_DATA_LOADED = computed(() => isDataLoaded.value);
    const GET_CARTS = computed(() => data.value.carts);
    const GET_CART = computed(() => data.value.cart);
    const GET_ABOUT = computed(() => data.value.about);

    const checkIfDataIsLoaded = () => {
        isDataLoaded.value = !isDataLoaded.value;
    };
    const populateData = (value: Data) => {
        data.value = value;
    };
    return {
        data,
        isDataLoaded,
        GET_CARTS,
        GET_CART,
        GET_DATA_LOADED,
        GET_ABOUT,
        checkIfDataIsLoaded,
        populateData,
    };
});

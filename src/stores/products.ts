import {defineStore} from 'pinia';
import {computed, ref} from 'vue';

import type {Product} from '@/stores/types';
export const useProductsStore = defineStore('products', () => {
    const data = ref(<Product[]>[]);
    const isDataLoaded = ref<Boolean>(false);
    const IS_DATA_LOADED = computed(() => isDataLoaded.value);
    const GET_DATA = computed(() => data.value);
    const checkIfDataIsLoaded = () => {
        isDataLoaded.value = !isDataLoaded.value;
    };
    const populateData = (value: Product[]) => {
        data.value = value;
    };

    return {
        data,
        isDataLoaded,
        IS_DATA_LOADED,
        GET_DATA,
        checkIfDataIsLoaded,
        populateData,
    };
});

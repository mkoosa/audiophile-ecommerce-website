import {defineStore} from 'pinia';
import {computed, ref} from 'vue';

import type {Data} from '@/stores/types';
export const useDataStore = defineStore('data', () => {
    const carts = {
        carts: [
            {
                category: '',
                img: '',
            },
        ],
    };

    const data = ref(carts);
    console.log(data.value);
    const GET_CARTS = computed(() => data.value.carts);
    const populateData = (value: Data) => {
        data.value = value;
    };
    return {data, GET_CARTS, populateData};
});

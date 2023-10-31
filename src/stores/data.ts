import {defineStore} from 'pinia';
import {computed, ref} from 'vue';

import getData from '@/api/getData';

const useDataStore = defineStore('data', () => {
    const data = ref();

    const FETCH_DATA = async () => {
        data.value = await getData();
    };

    const GET_DATA = computed(() => data.value);

    return {data, FETCH_DATA, GET_DATA};
});

export default useDataStore;

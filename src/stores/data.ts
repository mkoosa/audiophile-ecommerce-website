import {defineStore} from 'pinia';

export const useDataStore = defineStore('data', {
    state: () => {
        return {data: {}};
    },
    actions: {},
    getters: {
        GET_DATA: (state) => state.data,
    },
});

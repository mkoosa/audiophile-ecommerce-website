import {defineStore} from 'pinia';
import {computed, ref} from 'vue';

export const useConfirmationStore = defineStore('confirmation', () => {
    const less = ref(true);
    const lessMore = () => {
        console.log(';ok');
        less.value = !less.value;
    };
    const IS_LESS = computed(() => less.value);

    return {less, lessMore, IS_LESS};
});

import {defineStore} from 'pinia';
import {computed, ref} from 'vue';

export const useDrawerStore = defineStore('drawer', () => {
    const openDrawer = ref(false);
    const toggleDrawer = () => (openDrawer.value = !openDrawer.value);

    const OPEN_DRAWER = computed(() => openDrawer.value);

    return {openDrawer, toggleDrawer, OPEN_DRAWER};
});

import {defineStore} from 'pinia';
import {computed, ref} from 'vue';

export const useNavStore = defineStore('nav', () => {
    const isNavMobileActive = ref<boolean>(false);
    const toggleNavMobile = () =>
        (isNavMobileActive.value = !isNavMobileActive.value);
    const IS_NAV_MOBILE_ACTIVE = computed(() => isNavMobileActive.value);

    return {isNavMobileActive, toggleNavMobile, IS_NAV_MOBILE_ACTIVE};
});

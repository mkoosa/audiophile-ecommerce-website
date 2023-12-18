import {defineStore} from 'pinia';
import {computed, ref} from 'vue';

import type {BILLING, SHIPPING} from '@/stores/types';

export const useCheckoutStore = defineStore('checkout', () => {
    const billingDetails = ref<BILLING>({
        name: '',
        emailAddress: '',
        phoneNumber: '',
    });
    const shippingDetails = ref<SHIPPING>({
        yourAddress: '',
        zipCode: '',
        city: '',
        country: '',
    });
    let checkoutDetails = ref({});

    const concatDetails = () => {
        checkoutDetails.value = {
            ...billingDetails.value,
            ...shippingDetails.value,
        };
    };
    const BILLING_DETAILS = computed(() => billingDetails.value);
    const SHIPPING_DETAILS = computed(() => shippingDetails.value);
    const CHECKOUT_DETAILS = computed(() => checkoutDetails.value);

    return {
        billingDetails,
        shippingDetails,
        checkoutDetails,
        concatDetails,
        BILLING_DETAILS,
        SHIPPING_DETAILS,
        CHECKOUT_DETAILS,
    };
});

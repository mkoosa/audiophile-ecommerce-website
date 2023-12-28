import {defineStore} from 'pinia';
import {computed, ref} from 'vue';

import type {BILLING, SHIPPING, PAYMENT} from '@/stores/types';

const billingDetailsInitial: BILLING = {
    name: '',
    emailAddress: '',
    phoneNumber: '',
};

const shippingDetailsInitial: SHIPPING = {
    yourAddress: '',
    zipCode: '',
    city: '',
    country: '',
};

const paymentInitial: PAYMENT = {
    number: '',
    pin: '',
};

export const useCheckoutStore = defineStore('checkout', () => {
    const billingDetails = ref({...billingDetailsInitial});
    const shippingDetails = ref({...shippingDetailsInitial});
    const payment = ref({...paymentInitial});
    const paymentMethod = ref<string>('e-Money');
    let checkoutDetails = ref({});
    const isFormValid = ref<boolean>(false);

    const concatDetails = () => {
        checkoutDetails.value = {
            ...billingDetails.value,
            ...shippingDetails.value,
        };
    };
    const resetInputsFields = () => {
        billingDetails.value = billingDetailsInitial;
        shippingDetails.value = shippingDetailsInitial;
        payment.value = paymentInitial;
        checkoutDetails.value = {};
    };
    const acceptForm = () => (isFormValid.value = !isFormValid.value);

    const BILLING_DETAILS = computed(() => billingDetails.value);
    const SHIPPING_DETAILS = computed(() => shippingDetails.value);
    const CHECKOUT_DETAILS = computed(() => checkoutDetails.value);
    const PAYMENT_METHOD = computed(() => paymentMethod.value);
    const IS_FORM_VALID = computed(() => isFormValid.value);

    return {
        billingDetails,
        shippingDetails,
        checkoutDetails,
        paymentMethod,
        payment,
        concatDetails,
        acceptForm,
        resetInputsFields,
        BILLING_DETAILS,
        SHIPPING_DETAILS,
        CHECKOUT_DETAILS,
        PAYMENT_METHOD,
        IS_FORM_VALID,
    };
});

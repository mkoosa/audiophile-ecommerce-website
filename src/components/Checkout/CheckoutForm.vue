<template>
    <form v-on:submit.prevent="onSubmit">
        <checkout-billing></checkout-billing>
        <checkout-shipping></checkout-shipping>
        <checkout-payment></checkout-payment>
        <form-element
            :element="'submit'"
            :class="`checkout__submit`"
            :classInput="`checkout__submit-btn main-btn main-btn--orange`"
            :type="'submit'"
            :value="'continue pay'"
        ></form-element>
    </form>
</template>

<script setup lang="ts">
import FormElement from '../Shared/FormElement.vue';
import CheckoutBilling from '@/components/Checkout/CheckoutBilling.vue';
import CheckoutShipping from '@/components/Checkout/CheckoutShipping.vue';
import CheckoutPayment from '@/components/Checkout/CheckoutPayment.vue';
import {useCheckoutStore} from '@/stores/checkout';

const checkoutStore = useCheckoutStore();

const onSubmit = () => {
    checkoutStore.concatDetails();
};
</script>

<style scoped></style>

<template>
    <form v-on:submit.prevent="onSubmit">
        <checkout-billing></checkout-billing>
        <checkout-shipping></checkout-shipping>
        <checkout-payment></checkout-payment>

        <form-element
            :element="'submit'"
            :class="`checkout__submit`"
            :classInput="`checkout__submit-btn`"
            :type="'submit'"
            :text="'submit'"
        ></form-element>
    </form>
</template>

<script setup lang="ts">
import FormElement from '../Shared/FormElement.vue';
import CheckoutBilling from '@/components/Checkout/CheckoutBilling.vue';
import CheckoutShipping from '@/components/Checkout/CheckoutShipping.vue';
import CheckoutPayment from '@/components/Checkout/CheckoutPayment.vue';

const onSubmit = () => {
    console.log('ss');
};
</script>

<style scoped></style>

<template>
    <div>
        <Form
            @submit="onSubmit"
            :validation-schema="formSchema"
            @invalid-submit="onInvalidSubmit"
        >
            <checkout-billing></checkout-billing>
            <checkout-shipping></checkout-shipping>
            <checkout-payment></checkout-payment>
            <form-element
                :element="'submit'"
                :class="`checkout__submit`"
                :classInput="`checkout__submit-btn submit-btn main-btn main-btn--orange`"
                :type="'submit'"
            ></form-element>
        </Form>
    </div>
</template>

<script setup lang="ts">
import FormElement from '../Shared/FormElement.vue';
import CheckoutBilling from '@/components/Checkout/CheckoutBilling.vue';
import CheckoutShipping from '@/components/Checkout/CheckoutShipping.vue';
import CheckoutPayment from '@/components/Checkout/CheckoutPayment.vue';
import {Form} from 'vee-validate';
import formSchema from '@/api/schemas';
import {onSubmit, onInvalidSubmit} from '@/api/checkout';
</script>

<style scoped></style>

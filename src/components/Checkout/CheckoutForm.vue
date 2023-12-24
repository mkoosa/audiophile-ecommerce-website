<template>
    <Form
        @submit="onSubmit"
        :validation-schema="formSchema"
        @invalid-submit="onInvalidSubmit"
        class="checkout__form"
    >
        <div class="checkout__inputs">
            <h1 class="checkout__heading">{{ headingTxt }}</h1>
            <checkout-billing></checkout-billing>
            <checkout-shipping></checkout-shipping>
            <checkout-payment></checkout-payment>
        </div>
        <div class="checkout__details">
            <checkout-summary></checkout-summary>
            <form-element
                :element="'submit'"
                :class="`checkout__submit`"
                :classInput="`checkout__submit-btn submit-btn main-btn main-btn--orange`"
                :type="'submit'"
            ></form-element>
        </div>
    </Form>
</template>

<script setup lang="ts">
import FormElement from '../Shared/FormElement.vue';
import CheckoutBilling from '@/components/Checkout/CheckoutBilling.vue';
import CheckoutShipping from '@/components/Checkout/CheckoutShipping.vue';
import CheckoutPayment from '@/components/Checkout/CheckoutPayment.vue';
import CheckoutSummary from './CheckoutSummary.vue';
import {Form} from 'vee-validate';
import formSchema from '@/api/schemas';
import {onSubmit, onInvalidSubmit} from '@/api/checkout';
import {ref} from 'vue';

const headingTxt = ref<string>('checkout');
</script>

<style scoped>
.checkout__heading {
    padding: 2rem 0;
    font-size: 2.6rem;
    font-weight: 700;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    color: var(--light-black);
}
@media only screen and (min-width: 1025px) {
    .checkout__form {
        display: flex;
        background: var(--light-grey);
    }
    .checkout__inputs {
        padding: 4rem;
        padding-right: 4rem;
        background: var(--white);
        border-radius: 1rem;
        flex-basis: 63%;
    }
    .checkout__details {
        padding: 0 4rem 0 4rem;
        flex-basis: 37%;
        margin-left: 3rem;
        background: var(--white);
        border-radius: 1rem;
    }
}
</style>

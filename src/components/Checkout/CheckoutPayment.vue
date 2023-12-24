<template>
    <div class="payment">
        <h2 class="payment__heading">{{ heading }}</h2>
        <h3 class="payment__method">{{ method }}</h3>
        <div class="payment__form">
            <form-element
                :class="'payment__element payment__element--radio payment__element--money'"
                :classLabel="`payment__label payment__label--radio`"
                :element="'radio'"
                :type="'radio'"
                :label="'e-Money'"
                :methodPaymentValue="'e-Money'"
                v-model="checkoutStore.paymentMethod"
                :checked="true"
            ></form-element>
            <form-element
                :class="'payment__element payment__element--radio payment__element--cash'"
                :classLabel="`payment__label payment__label--radio`"
                :element="'radio'"
                :type="'radio'"
                :label="'Cash on Delivery'"
                :methodPaymentValue="'Cash on Delivery'"
                v-model="checkoutStore.paymentMethod"
            ></form-element>
            <form-element
                v-if="!iSCashOnDelivery"
                :name="`Account Number`"
                :class="'payment__element payment__element--account'"
                :classLabel="`payment__label payment__label--custom`"
                :classInput="'payment__input'"
                :element="'input'"
                :placeholder="'2358452587'"
                :type="'text'"
                :label="'e-Money Number'"
                v-model="checkoutStore.payment.number"
            ></form-element>
            <form-element
                v-if="!iSCashOnDelivery"
                :name="`PIN`"
                :class="'payment__element payment__element--pin'"
                :classLabel="`payment__label payment__label--custom`"
                :classInput="'payment__input'"
                :element="'input'"
                :placeholder="'6891'"
                :type="'text'"
                :label="'e-Money PIN'"
                v-model="checkoutStore.payment.pin"
            ></form-element>
        </div>
        <checkout-cash-description
            v-if="iSCashOnDelivery"
        ></checkout-cash-description>
    </div>
</template>

<script setup lang="ts">
import FormElement from '../Shared/FormElement.vue';
import CheckoutCashDescription from './CheckoutCashDescription.vue';
import {ref, computed} from 'vue';
import {checkoutStore} from '@/main';
const heading = ref<string>('payment details');
const method = ref<string>('payment method');
const iSCashOnDelivery = computed(() =>
    checkoutStore.PAYMENT_METHOD === 'Cash on Delivery' ? true : false,
);
</script>

<style scoped>
.payment {
    margin-top: 3rem;
}
.payment__heading {
    margin-top: 1rem;
    color: var(--orange);
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
}
.payment__method {
    margin: 1.7rem 0 0rem 0;
    text-transform: capitalize;
    color: var(--light-black);
    font-size: 1.3rem;
    font-weight: 800;
}
.payment__form {
    margin-top: -0.5rem;
}
@media only screen and (min-width: 768px) {
    .payment__form {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(5.266rem, 5.266rem, 1fr);
        column-gap: 2rem;
        row-gap: 2rem;
    }
}
</style>

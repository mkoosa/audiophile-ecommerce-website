<template>
    <div class="payment">
        <h2 class="payment__heading">{{ heading }}</h2>
        <h3 class="payment__method">{{ method }}</h3>
        <div class="payment__form">
            <form-element
                :class="'checkout__element checkout__element--radio'"
                :classLabel="`checkout__label checkout__label--radio`"
                :element="'radio'"
                :type="'radio'"
                :label="'e-Money'"
                :checked="true"
                ref="labelRadio"
            ></form-element>
        </div>
        <form-element
            :class="'checkout__element checkout__element--radio'"
            :classLabel="`checkout__label checkout__label--radio`"
            :element="'radio'"
            :type="'radio'"
            :label="'Cash on Delivery'"
        ></form-element>
        <form-element
            :class="'checkout__element'"
            :classLabel="`checkout__label checkout__label--custom`"
            :classInput="'checkout__input'"
            :element="'input'"
            :placeholder="'2358452587'"
            :type="'text'"
            :label="'e-Money Number'"
            v-model="paymentMethod.number"
        ></form-element>
        <form-element
            :class="'checkout__element'"
            :classLabel="`checkout__label checkout__label--custom`"
            :classInput="'checkout__input'"
            :element="'input'"
            :placeholder="'6891'"
            :type="'text'"
            :label="'e-Money PIN'"
            v-model="paymentMethod.pin"
        ></form-element>
    </div>
</template>

<script setup lang="ts">
import FormElement from '../Shared/FormElement.vue';
import {ref} from 'vue';
import type {PAYMENT} from '@/stores/types';

const heading = ref<string>('payment details');
const method = ref<string>('payment method');
const paymentMethod = ref<PAYMENT>({
    eMoney: true,
    cash: false,
    number: '',
    pin: '',
});
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
</style>

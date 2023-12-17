<template>
    <div class="shipping">
        <h2 class="shipping__heading">{{ heading }}</h2>
        <div class="shipping__form">
            <form-element
                :class="'checkout__element'"
                :classLabel="`checkout__label`"
                :classInput="'checkout__input'"
                :element="'input'"
                :placeholder="'1137 Williams Avenue '"
                :type="'text'"
                :label="'Your address'"
                v-model="shippingDetails.yourAddress"
            ></form-element>
            <form-element
                :class="'checkout__element'"
                :classLabel="`checkout__label`"
                :classInput="'checkout__input'"
                :element="'input'"
                :placeholder="' 10001'"
                :type="'text'"
                :label="'zip code'"
                v-model="shippingDetails.zipCode"
            ></form-element>
            <form-element
                :class="'checkout__element'"
                :classLabel="`checkout__label`"
                :classInput="'checkout__input'"
                :element="'input'"
                :placeholder="'New York'"
                :type="'text'"
                :label="'city'"
                v-model="shippingDetails.city"
            ></form-element>
            <form-element
                :class="'checkout__element'"
                :classLabel="`checkout__label`"
                :classInput="'checkout__input'"
                :element="'input'"
                :placeholder="'United States'"
                :type="'text'"
                :label="'Country'"
                v-model="shippingDetails.country"
            ></form-element>
        </div>
    </div>
</template>

<script setup lang="ts">
import FormElement from '../Shared/FormElement.vue';
import {ref} from 'vue';
import type {SHIPPING} from '@/stores/types';

const heading = ref<string>('shipping info');
const shippingDetails = ref<SHIPPING>({
    yourAddress: '',
    zipCode: '',
    city: '',
    country: '',
});
</script>

<style scoped>
.shipping {
    margin-top: 3rem;
}
.shipping__heading {
    margin-top: 1rem;
    color: var(--orange);
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
}

.shipping__form {
    margin-top: 1rem;
}
</style>

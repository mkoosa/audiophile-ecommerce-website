<template>
    <div class="shipping">
        <h2 class="shipping__heading">{{ heading }}</h2>
        <div class="shipping__form">
            <form-element
                :name="`Address`"
                :class="'shipping__element shipping__element--address'"
                :classLabel="`shipping__label`"
                :classInput="'shipping__input'"
                :element="'input'"
                :placeholder="'1137 Williams Avenue '"
                :type="'text'"
                :label="'Your address'"
                v-model="checkoutStore.shippingDetails.yourAddress"
            ></form-element>
            <form-element
                :name="`Zip Code`"
                :class="'shipping__element shipping__element--code'"
                :classLabel="`shipping__label`"
                :classInput="'shipping__input'"
                :element="'input'"
                :placeholder="' 10001'"
                :type="'text'"
                :label="'zip code'"
                v-model="checkoutStore.shippingDetails.zipCode"
            ></form-element>
            <form-element
                :name="`City`"
                :class="'shipping__element shipping__element--city'"
                :classLabel="`shipping__label`"
                :classInput="'shipping__input'"
                :element="'input'"
                :placeholder="'New York'"
                :type="'text'"
                :label="'city'"
                v-model="checkoutStore.shippingDetails.city"
            ></form-element>
            <form-element
                :name="`Country`"
                :class="'shipping__element shipping__element--country'"
                :classLabel="`shipping__label`"
                :classInput="'shipping__input'"
                :element="'input'"
                :placeholder="'United States'"
                :type="'text'"
                :label="'Country'"
                v-model="checkoutStore.shippingDetails.country"
            ></form-element>
        </div>
    </div>
</template>

<script setup lang="ts">
import FormElement from '../Shared/FormElement.vue';
import {ref} from 'vue';
import {checkoutStore} from '@/main';

const heading = ref<string>('shipping info');
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

@media only screen and (min-width: 768px) {
    .shipping__form {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
        column-gap: 2rem;
    }
}
</style>

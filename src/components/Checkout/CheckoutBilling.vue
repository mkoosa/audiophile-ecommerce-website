<template>
    <div class="billing">
        <h2 class="billing__heading">{{ heading }}</h2>
        <div class="billing__form">
            <form-element
                :class="'checkout__element'"
                :classLabel="`checkout__label`"
                :classInput="'checkout__input'"
                :element="'input'"
                :placeholder="' Joe Macintosh'"
                :type="'text'"
                :label="'name'"
                v-model="checkoutStore.billingDetails.name"
            ></form-element>
            <form-element
                :class="'checkout__element'"
                :classLabel="`checkout__label`"
                :classInput="'checkout__input'"
                :element="'input'"
                :placeholder="' joemacintosh@some.com'"
                :type="'email'"
                :label="'email address'"
                v-model="checkoutStore.billingDetails.emailAddress"
            ></form-element>
            <form-element
                :class="'checkout__element'"
                :classLabel="`checkout__label`"
                :classInput="'checkout__input'"
                :element="'input'"
                :placeholder="'+1 202-555-0136'"
                :type="'text'"
                :label="'phone number'"
                v-model="checkoutStore.billingDetails.phoneNumber"
            ></form-element>
        </div>
    </div>
</template>

<script setup lang="ts">
import FormElement from '../Shared/FormElement.vue';
import {ref} from 'vue';
import {useCheckoutStore} from '@/stores/checkout';

const checkoutStore = useCheckoutStore();
const heading = ref<string>('billing details');
</script>

<style scoped>
.billing__heading {
    margin-top: 1rem;
    color: var(--orange);
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-weight: 700;
    font-size: 1.4rem;
}

.billing__form {
    margin-top: 1rem;
}
</style>

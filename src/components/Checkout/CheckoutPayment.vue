<template>
    <div class="payment">
        <h2 class="payment__heading">{{ heading }}</h2>
        <div class="payment__form">
            <form-element
                :class="'checkout__element checkout__element--radio'"
                :classLabel="`checkout__label checkout__label--radio`"
                :element="'radio'"
                :type="'radio'"
                :label="'e-Money'"
                :value="paymentMethod.eMoney"
                :checked="true"
            ></form-element>
        </div>
    </div>
</template>

<script setup lang="ts">
import FormElement from '../Shared/FormElement.vue';
import {ref} from 'vue';
import type {PAYMENT} from '@/stores/types';

const heading = ref<string>('payment info');
const paymentMethod = ref<PAYMENT>({
    eMoney: true,
    cash: false,
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

.payment__form {
    margin-top: 1rem;
}
</style>

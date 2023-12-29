<template>
    <div v-if="element === 'input'" :class="class">
        <label for="" :label="label" :class="classLabel">{{ label }}</label>
        <input
            :name="name"
            :class="classInput"
            :type="type"
            :placeholder="placeholder"
            @input="emitValueInInputText"
            @click="removeBorder"
            v-model="value"
        />
        <span class="error-message">
            {{ errorMessage }}
        </span>
    </div>
    <div v-if="element === 'submit'" :class="class">
        <input
            :class="classInput"
            :type="type"
            role="button"
            value="continue & pay"
            @click="removeBorder"
        />
    </div>

    <div v-if="element === 'radio'" :class="class" ref="labelRef">
        <label for="" :class="classLabel" :label="label">
            <input
                :type="type"
                name="radio"
                @input="emitValueInInputRadio"
                :checked="checked"
            />
            {{ label }}
        </label>
    </div>
</template>
<script setup lang="ts">
import {toRefs, ref, onMounted} from 'vue';
import {useField} from 'vee-validate';
import {
    removeBorder,
    addBorderToInputRadio,
    backToMain,
    CHECKOUT_RADIO_CLASS,
    CHECKED,
} from '@/api/formElement';
import {useRouter} from 'vue-router';
import {useCartStore} from '@/stores/cart';

const router = useRouter();
const cartStore = useCartStore();
const labelRef = ref<HTMLElement | null>(null);

const props = defineProps({
    element: {
        type: String,
    },
    type: {
        type: String,
    },
    name: {
        type: String,
        default: '',
    },
    value: {
        type: String,
        default: '',
    },
    text: {
        type: String,
        default: '',
    },

    methodPaymentValue: {
        type: String,
        default: '',
    },
    placeholder: {
        type: String,
    },

    label: {
        type: String,
    },
    modelValue: {
        type: [String, Boolean],
    },
    class: {
        type: String,
    },
    classLabel: {
        type: String,
    },
    classInput: {
        type: String,
    },
    text: {
        type: String,
    },
    checked: {
        type: Boolean,
    },
});

const {value, errorMessage} = useField(() => props.name);
const {methodPaymentValue, label} = toRefs(props);

const emit = defineEmits(['update:modelValue']);
const emitValueInInputText = (e: Event) => {
    let value = e.target as HTMLInputElement;
    emit('update:modelValue', value.value);
};
const emitValueInInputRadio = () => {
    document.querySelectorAll(CHECKOUT_RADIO_CLASS).forEach((el) => {
        el.classList.remove(CHECKED);
    });
    emit('update:modelValue', methodPaymentValue?.value);
    labelRef.value?.classList.add(CHECKED);
};

onMounted(() => {
    addBorderToInputRadio();
    backToMain(cartStore, router);
});
</script>
<style scoped>
.payment__element,
.shipping__element,
.billing__element {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
}

.payment__label,
.shipping__label,
.billing__label {
    margin: 0.7rem 0 1rem 0;
    text-transform: capitalize;
    color: var(--light-black);
    font-size: 1.3rem;
    font-weight: 700;
}
.shipping__input,
.payment__input,
.billing__input {
    color: var(--gray);
    padding: 1.4rem;
    padding-left: 2rem;
    width: 100%;
    border-radius: 1rem;
    outline: none;
    border: 0.15rem solid lightgrey;
}

.shipping__input:focus,
.payment__input:focus,
.billing__input:focus,
.__input:focus {
    border: 0.15rem solid var(--orange);
}

.payment__element--radio.checked {
    border: 0.15rem solid var(--orange);
}

::placeholder {
    color: var(--gray);
    font-weight: 600;
    font-size: 1.5rem;
}

/* radio  */
.payment__element--radio {
    flex-direction: row;
    padding: 0.7rem;
    padding-left: 1rem;
    width: 100%;
    border-radius: 1rem;
    border: 0.15rem solid lightgrey;
}
.payment__label--radio {
    padding-left: 1rem;
    text-transform: none;
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1.1;
    display: grid;
    grid-template-columns: 1em auto;
    gap: 1.5rem;
    place-items: center;
}

.checkout__label--custom {
    text-transform: none;
}
.payment__element--radio:nth-of-type(2) {
    margin: 2rem 0;
}

input[type='radio'] {
    appearance: none;
    -webkit-appearance: none;
    background-color: #fff;
    margin: 0;
    font: inherit;
    color: currentColor;
    width: 1.4em;
    height: 1.4em;
    border: 0.07em solid var(--gray);
    border-radius: 50%;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;
}
input[type='radio']::before {
    content: '';
    width: 0.7em;
    height: 0.7em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 0.8em 0.8em var(--orange);
    -webkit-transform: scale(0);
    -moz-transform: scale(0);
    -ms-transform: scale(0);
    -o-transform: scale(0);
    background-color: CanvasText;
}

input[type='radio']:checked::before {
    transform: scale(1);
}

.checkout__submit-btn {
    height: 4.66rem;
    margin: 3rem 0;
    width: 100%;
}
.error-message {
    font-size: 1.1rem;
    margin-top: 0.5rem;
    font-weight: 500;
    letter-spacing: 0.1rem;
    color: rgb(237, 5, 5);
}

.submit-btn.invalid {
    background: rgb(237, 5, 5);
    filter: blur(1px);
}
@media only screen and (min-width: 768px) {
    .billing__element--name {
        grid-column: 1/2;
        grid-row: 1/2;
    }
    .billing__element--mail {
        grid-column: 2/3;
        grid-row: 1/2;
    }
    .billing__element--number {
        grid-column: 1/2;
        grid-row: 2/3;
    }
    .shipping__element--address {
        grid-column: 1/3;
        grid-row: 1/2;
    }
    .shipping__element--code {
        grid-column: 1/2;
        grid-row: 2/3;
    }
    .shipping__element--city {
        grid-column: 2/3;
        grid-row: 2/3;
    }
    .shipping__element--country {
        grid-column: 1/2;
        grid-row: 3/4;
    }
    .payment__element--money {
        grid-column: 2/3;
        grid-row: 1/2;
    }
    .payment__element--cash {
        grid-column: 2/3;
        grid-row: 2/3;
    }
    .payment__element--account {
        grid-column: 1/2;
        grid-row: 3/4;
        margin-top: 0;
    }
    .payment__element--pin {
        grid-column: 2/3;
        grid-row: 3/4;
        margin-top: 0;
    }
    .payment__element--radio {
        height: auto;
    }

    .payment__element.payment__element--radio {
        margin: 0rem 0rem;
    }
}
</style>

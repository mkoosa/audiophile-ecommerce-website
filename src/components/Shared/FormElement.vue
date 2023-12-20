<template>
    <div v-if="element === 'input'" :class="class">
        <label for="" :label="label" :class="classLabel">{{ label }}</label>
        <input
            :class="classInput"
            :type="type"
            :placeholder="placeholder"
            :value.lazy="modelValue"
            @input="emitValueInInputText"
            @click="removeBorder"
        />
    </div>
    <div v-if="element === 'submit'" :class="class">
        <input
            :class="classInput"
            :type="type"
            role="button"
            :value="value"
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
import {findHtmlElements, addClass, removeClass} from '@/api/formElement';
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
    value: {
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

const {value, modelValue, label} = toRefs(props);

const emit = defineEmits(['update:modelValue']);

const emitValueInInputText = (e: Event) => {
    let value = e.target as HTMLInputElement;
    emit('update:modelValue', value.value);
};

const emitValueInInputRadio = () => {
    findHtmlElements('.checkout__element--radio').forEach((el) => {
        el.classList.remove('checked');
    });
    emit('update:modelValue', value?.value);
    labelRef.value?.classList.add('checked');
};

const removeBorder = () => {
    findHtmlElements('.checkout__element--radio input').forEach(
        (input: Element) => {
            if (input.closest('.checked') != null) {
                removeClass(
                    input.closest('.checked') as HTMLInputElement,
                    'checked',
                );
            }
        },
    );
};

onMounted(() => {
    findHtmlElements('.checkout__element--radio input').forEach(
        (input: Element) => {
            const element = input as HTMLInputElement;
            element.checked
                ? addClass(
                      element.closest(
                          '.checkout__element--radio',
                      ) as HTMLElement,
                      'checked',
                  )
                : false;
        },
    );
    if (cartStore.PRODUCTS_IN_CART.length === 0) router.push({path: '/'});
});
</script>
<style scoped>
.checkout__element {
    display: flex;
    flex-direction: column;
}

.checkout__label {
    margin: 0.7rem 0 1rem 0;
    text-transform: capitalize;
    color: var(--light-black);
    font-size: 1.3rem;
    font-weight: 700;
}
.checkout__input {
    color: var(--gray);
    padding: 1.4rem;
    padding-left: 2rem;
    width: 100%;
    border-radius: 1rem;
    outline: none;
    border: 0.15rem solid lightgrey;
}

.checkout__input:focus {
    border: 0.15rem solid var(--orange);
}

.checkout__element--radio.checked {
    border: 0.15rem solid var(--orange);
}
.checkout__element {
    margin-top: 2rem;
}
::placeholder {
    color: var(--gray);
    font-weight: 600;
    font-size: 1.5rem;
}

/* radio  */
.checkout__element--radio {
    flex-direction: row;
    padding: 0.7rem;
    padding-left: 1rem;
    width: 100%;
    border-radius: 1rem;
    border: 0.15rem solid lightgrey;
}
.checkout__label--radio {
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
.checkout__element--radio:nth-of-type(2) {
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
    margin: 3rem 0;
    width: 100%;
}
</style>

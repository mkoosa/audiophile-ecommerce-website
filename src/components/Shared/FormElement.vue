<template>
    <div v-if="element === 'input'" :class="class">
        <label for="" :label="label" :class="classLabel">{{ label }}</label>
        <input
            :class="classInput"
            :type="type"
            :placeholder="placeholder"
            :value.lazy="modelValue"
            @input="emitValue"
        />
    </div>
    <div v-if="element === 'submit'" :class="class">
        <input :class="classInput" :type="type" :text="text" />
    </div>

    <div v-if="element === 'radio'" :class="class">
        <label for="" :class="classLabel" :label="label">
            <input :type="type" name="radio" :checked="checked" />
            {{ label }}
        </label>
    </div>
</template>
<script setup lang="ts">
defineProps({
    element: {
        type: String,
    },
    type: {
        type: String,
    },
    placeholder: {
        type: String,
    },
    label: {
        type: String,
    },
    modelValue: {
        type: String,
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

const emit = defineEmits(['update:modelValue']);
const emitValue = (e: Event) => {
    let value = e.target as HTMLInputElement;
    emit('update:modelValue', value.value);
};
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

.checkout__element + .checkout__element {
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
    margin-bottom: 5rem;
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
    box-shadow: inset 1em 1em var(--orange);
    -webkit-transform: scale(0);
    -moz-transform: scale(0);
    -ms-transform: scale(0);
    -o-transform: scale(0);
    background-color: CanvasText;
}

input[type='radio']:checked::before {
    transform: scale(1);
}
</style>

<template>
    <button :class="btnClass">{{ text }}</button>
</template>

<script setup lang="ts">
import {computed, toRefs} from 'vue';

const props = defineProps({
    text: {
        type: String,
        required: false,
    },
    type: {
        type: String,
        required: false,
        default: '',
    },
});

const {type} = toRefs(props);
const btnClass = computed(() => {
    return {
        [type.value]: true,
    };
});
</script>

<style>
.hero__btn {
    margin: 2.5rem;
    background: var(--orange);
    color: var(--white);
    padding: 1.1em 1.6em;
    font-size: 1.3rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    border: none;
    font-weight: 500;
}

@media only screen and (min-width: 1025px) {
    .hero__btn {
        margin-left: 0;
    }
}
</style>

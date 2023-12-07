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
const btnClass = computed(() => [type.value]);
</script>

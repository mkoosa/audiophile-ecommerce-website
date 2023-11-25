<template>
    <div class="plus-minus">
        <p @click="subtract()" class="minus">-</p>
        <p class="total">{{ GET_TOTAL }}</p>
        <p @click="add()" class="plus">+</p>
    </div>
</template>
<script setup lang="ts">
import {computed, ref} from 'vue';
const total = ref(0);
const GET_TOTAL = computed(() => total.value);

const add = () => total.value++;
const subtract = () => (total.value < 1 ? (total.value = 0) : total.value--);
</script>

<style scoped>
.plus-minus {
    display: flex;
    padding: 0.5em 2em;
    width: 11rem;
    /* width: 36%; */
    justify-content: space-around;
    background: var(--light-grey);
    align-items: center;
}

.plus,
.minus {
    font-size: 2rem;
    color: var(--gray);
    font-weight: 600;
}
.plus {
    margin-left: 2rem;
}
.minus {
    margin-right: 2rem;
}
.total {
    font-size: 1.6rem;
    font-weight: 600;
}

@media only screen and (min-width: 1025px) {
    .plus,
    .minus {
        cursor: pointer;
    }
}
</style>

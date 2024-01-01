<template>
    <a-drawer
        v-if="open"
        v-model:open="open"
        class="confirmation"
        root-class-name="checkout__drawer"
        :root-style="{
            zIndex: 100,
            border: 'none',
            color: 'transparent',
        }"
        title="Basic Drawer"
        placement="top"
        :maskClosable="false"
        :autofocus="false"
        header="false"
    >
        <confirmation-header></confirmation-header>
        <confirmation-body></confirmation-body>
        <action-button
            @click="backToHome"
            :class="['main-btn--orange', 'main-btn', 'confirmation-btn']"
            text="back to home"
        ></action-button>
    </a-drawer>
</template>
<script lang="ts" setup>
import ConfirmationHeader from './ConfirmationHeader.vue';
import ConfirmationBody from './ConfirmationBody.vue';
import ActionButton from '../Shared/ActionButton.vue';
import {useCheckoutStore} from '@/stores/checkout';
import {onMounted, computed} from 'vue';
import {useCartStore} from '@/stores/cart';
import {useRouter} from 'vue-router';

const cartStore = useCartStore();
const checkoutStore = useCheckoutStore();
const router = useRouter();

const open = computed(() => checkoutStore.IS_FORM_VALID);

const backToHome = () => {
    cartStore.resetStoreValues();
    checkoutStore.acceptForm();
    checkoutStore.resetInputsFields();
    router.push({name: 'Home'});
};

onMounted(() => {
    const drawer = document.querySelector('.ant-drawer');
    if (drawer!) {
        drawer.setAttribute('id', 'drawer');
    }
});
</script>

<style>
.checkout__drawer.ant-drawer .ant-drawer-content {
    max-width: 39rem;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -25%);
    -ms-transform: translate(-50%, -25%);
    transform: translate(-50%, -25%);
    margin: 0;
    right: 0;
}

.confirmation .ant-drawer-body {
    padding: 3rem;
}
.confirmation-btn {
    margin-top: 2.5rem;
    width: 100%;
    font-weight: 600;
}
.root-class-name {
    height: 200vh;
}
.checkout__drawer.ant-drawer {
    top: 0;
}

@media only screen and (min-width: 768px) {
    .checkout__drawer.ant-drawer .ant-drawer-content {
        max-width: 60rem;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, 0%);
        -ms-transform: translate(-50%, 0%);
        transform: translate(-50%, 0%);
    }
    .confirmation .ant-drawer-body {
        padding: 5rem;
    }
    .confirmation-btn {
        margin-top: 4.5rem;
    }
}
</style>

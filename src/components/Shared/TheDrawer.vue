<template>
    <a-config-provider :csp="{nonce: 'YourNonceCode'}">
        <a-drawer
            :width="500"
            :placement="placement"
            :open="open"
            :closeIcon="false"
            :openDrawer="openDrawer"
            :class="['cart__content']"
        >
            <the-cart></the-cart>
        </a-drawer>
    </a-config-provider>
</template>

<script lang="ts" setup>
import {ref, toRefs, watch} from 'vue';
import type {DrawerProps} from 'ant-design-vue';
import TheCart from '../Cart/TheCart.vue';
const placement = ref<DrawerProps['placement']>('top');
const open = ref<boolean>(false);
const props = defineProps({
    openDrawer: {
        type: Boolean,
    },
});

const {openDrawer} = toRefs(props);
const showDrawer = () => {
    open.value = true;
};
const onClose = () => {
    open.value = false;
};
watch(
    () => openDrawer.value,
    () => {
        openDrawer.value ? showDrawer() : onClose();
    },
);
</script>

<style>
.ant-drawer {
    z-index: 10;
}

.ant-drawer .ant-drawer-content {
    margin: 10rem auto 0 auto;
    width: 90%;
    border-radius: 1rem;
    max-width: 60rem;
}
.ant-drawer .ant-drawer-header {
    display: none;
}
.ant-drawer-top > .ant-drawer-content-wrapper {
    box-shadow: none;
}
</style>

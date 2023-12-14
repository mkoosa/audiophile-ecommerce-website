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
    max-width: 140rem;
    margin-inline: auto;
}
.ant-drawer .ant-drawer-body {
    padding-top: 1.5rem;
}

.ant-drawer .ant-drawer-content {
    margin: 10rem auto 0 auto;
    width: 90%;
    border-radius: 1rem;
    max-width: 40rem;
    height: auto;
}
.ant-drawer .ant-drawer-header {
    display: none;
}
.ant-drawer-top > .ant-drawer-content-wrapper {
    box-shadow: none;
}
.ant-drawer-content-wrapper {
    height: auto;
}

@media only screen and (min-width: 768px) {
    .ant-drawer-content-wrapper {
        position: relative;
    }
    .ant-drawer .ant-drawer-content {
        position: absolute;
        right: 4rem;
    }
}
@media only screen and (min-width: 1025px) {
    .ant-drawer .ant-drawer-content {
        right: 6rem;
    }
}
</style>

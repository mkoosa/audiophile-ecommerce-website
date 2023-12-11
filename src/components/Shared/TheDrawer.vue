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
            <div class="cart__header">
                <div class="cart__close">
                    <font-awesome-icon
                        :class="['close-cart-icon']"
                        @click="onClose"
                        :icon="['fas', 'xmark']"
                    />
                </div>
                <div class="cart__header-content">
                    <h2 class="cart__heading">cart (3)</h2>
                    <p class="cart__remove">remove all</p>
                </div>
            </div>
        </a-drawer>
    </a-config-provider>
</template>

<script lang="ts" setup>
import {ref, toRefs, watch} from 'vue';
import type {DrawerProps} from 'ant-design-vue';

const placement = ref<DrawerProps['placement']>('top');
const open = ref<boolean>(false);
const props = defineProps({
    openDrawer: {
        type: Boolean,
    },
});

const {openDrawer} = toRefs(props);

watch(
    () => openDrawer.value,
    () => showDrawer(),
);

const showDrawer = () => {
    open.value = true;
};

const onClose = () => {
    open.value = false;
};
</script>

<style>
.ant-drawer {
    z-index: 10;
}

.ant-drawer .ant-drawer-body {
    padding-top: 3.5rem;
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

.cart__header {
    position: relative;
}

.cart__close {
    text-transform: uppercase;
    color: var(--orange);
    position: absolute;
    bottom: 2.8rem;
    left: -1rem;
}
.cart__header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.cart__heading {
    text-transform: uppercase;
    font-size: 1.8rem;
    letter-spacing: 0.2rem;
    font-weight: 600;
}
.cart__remove {
    color: var(--gray);
    font-size: 1.5rem;
    line-height: 1.6;
    font-weight: 500;
    text-decoration: underline;
}
.cart__remove::first-letter {
    text-transform: uppercase;
}
.close-cart-icon {
    height: 1.5em;
}
</style>

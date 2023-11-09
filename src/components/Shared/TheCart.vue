<template>
    <div :class="cartClass">
        <img class="mobile" :class="imgClass" :src="srcMobile" alt="" />
        <img class="tablet" :class="imgClass" :src="srcTablet" alt="" />
        <img class="desktop" :class="imgClass" :src="srcDesktop" alt="" />

        <slot> </slot>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    cartClass: {
        type: Array,
        required: true,
        default: '',
    },
    imgClass: {
        type: Array,
        required: true,
        default: '',
    },
    srcMobile: {
        type: String,
    },
    srcTablet: {
        type: String,
    },
    srcDesktop: {
        type: String,
    },
});
</script>

<style>
img.tablet {
    display: none;
}
img.desktop {
    display: none;
}

@media only screen and (min-width: 481px) {
    img.mobile {
        display: none;
    }
    img.tablet {
        display: block;
    }
    img.desktop {
        display: none;
    }
}

@media only screen and (min-width: 1025px) {
    img.mobile {
        display: none;
    }
    img.tablet {
        display: none;
    }
    img.desktop {
        display: block;
    }
}
</style>

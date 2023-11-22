<template>
    <go-back></go-back>
    <div v-if="isDataLoaded" class="product indent">
        <product-card :product="product" class="product__cart">
            <p class="product__price">
                $ {{ preparePrice(product.price / 100) }}
            </p>
            <div class="product__calculation">
                <plus-minus></plus-minus>
                <action-btn
                    text="add to cart"
                    :class="['main-btn', 'main-btn--orange']"
                ></action-btn>
            </div>
            <div class="product__features features">
                <h2 class="features__heading">{{ featuresHeadingTxt }}</h2>
                <p class="features__first-paragraph">
                    {{ divideFeaturesText(product.features).partOne }}
                </p>
                <p class="features__second-paragraph">
                    {{ divideFeaturesText(product.features).partTwo }}
                </p>
            </div>
            <div class="product__equipment equipment">
                <ul class="equipment__list">
                    <p role="heading" class="equipment__heading">
                        {{ productEquipmentHeadingTxt }}
                    </p>
                    <li
                        v-for="item in product.includes"
                        :key="item.item"
                        class="equipment__list-element"
                    >
                        <span class="span-quantity">{{ item.quantity }}</span
                        ><span class="span-x">x</span>
                        <span class="span-item">{{ item.item }}</span>
                    </li>
                </ul>
            </div>
        </product-card>
    </div>
</template>

<script setup lang="ts">
import ProductCard from '../Shared/Product/ProductCard.vue';
import GoBack from '../Shared/GoBack.vue';
import PlusMinus from '../Shared/PlusMinus.vue';
import ActionBtn from '@/components/Shared/MainButton.vue';

import {useRoute} from 'vue-router';
import {headphonesStore} from '@/main';
import {computed, ref} from 'vue';

const route = useRoute();

const featuresHeadingTxt = ref('features');
const productEquipmentHeadingTxt = ref('in the box');

const isDataLoaded = computed(() => headphonesStore.IS_DATA_LOADED);
const product = computed(() => {
    let id = Number(route.params.id);
    return headphonesStore.data.filter((el) => el.id == id)[0];
});

const preparePrice = (value: number) => {
    return value.toString().replace('.', ',');
};
const divideFeaturesText = (text: string = '') => {
    const regex = /['*.']/g;
    let index;
    let dotCounter = 0;
    let partOne;
    let partTwo;

    while (regex.exec(text) !== null) {
        dotCounter++;
        if (dotCounter == 1) {
            index = regex.exec(text)?.index;
        }
    }

    if (index !== undefined) {
        partOne = text.slice(0, index + 1);
        partTwo = text.slice(index + 2, text.length);
    }
    return {
        partOne,
        partTwo,
    };
};
</script>

<style scoped>
.product__cart {
    color: var(--light-black);
}
.product {
    padding-top: 2rem;
}
.product__price {
    font-size: 1.9rem;
    font-weight: 700;
}
.product__calculation {
    margin: 2.5rem 0;
    display: flex;
}
.main-btn {
    margin-left: 1.5rem;
}
.features__heading {
    margin: 6rem 0 2rem 0;
    text-transform: uppercase;
    font-size: 2.5rem;
    font-weight: 800;
    letter-spacing: 0.2rem;
}
.features__first-paragraph,
.features__second-paragraph {
    padding-bottom: 2.5rem;
    color: var(--gray);
    font-size: 1.5rem;
    line-height: 1.6;
    font-weight: 500;
}
.equipment__heading {
    padding: 6rem 0 2rem 0;
    text-transform: uppercase;
    font-size: 2.5rem;
    font-weight: 800;
    letter-spacing: 0.2rem;
}

.equipment__list-element {
    margin-bottom: 1.3rem;
    font-size: 1.5rem;
    font-weight: 500;
}
.span-quantity,
.span-x {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--orange);
    opacity: 0.9;
}
.span-x {
    margin-right: 2rem;
}
.span-item {
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--gray);
    text-transform: capitalize;
}
</style>

<template>
    <section v-if="isDataLoaded" class="item indent">
        <div>
            <go-back></go-back>
        </div>
        <product-card
            :product="product"
            class="d-flex"
            v-slot:from-product-page
        >
            <p class="item__price">$ {{ preparePrice(product.price / 100) }}</p>
            <div class="item__calculation">
                <plus-minus :product="product"></plus-minus>
                <action-btn
                    @click="addItemToCart"
                    text="add to cart"
                    :class="['main-btn', 'main-btn--orange']"
                ></action-btn>
            </div>
        </product-card>
        <div class="d-flex">
            <div class="item__features features">
                <h2 class="features__heading">{{ featuresHeadingTxt }}</h2>
                <p class="features__first-paragraph">
                    {{ divideFeaturesText(product.features).partOne }}
                </p>
                <p class="features__second-paragraph">
                    {{ divideFeaturesText(product.features).partTwo }}
                </p>
            </div>
            <div class="item__equipment equipment">
                <p role="heading" class="equipment__heading">
                    {{ productEquipmentHeadingTxt }}
                </p>
                <ul class="equipment__list">
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
        </div>
        <product-gallery :products="product"></product-gallery>
        <may-like :products="product"></may-like>
    </section>
</template>
<script lang="ts">
export default {
    name: 'Product',
};
</script>

<script setup lang="ts">
import ProductCard from '../Shared/Product/ProductCard.vue';
import GoBack from '../Shared/GoBack.vue';
import PlusMinus from '../Shared/PlusMinus.vue';
import ActionBtn from '@/components/Shared/ActionButton.vue';
import ProductGallery from '../Shared/Product/ProductGallery.vue';
import MayLike from '../Shared/MayLike.vue';
import {useRoute} from 'vue-router';
import {computed, ref} from 'vue';
import {useProductsStore} from '@/stores/products';
import {useCartItemStore} from '@/stores/cartItem';
import {useCartStore} from '@/stores/cart';

const productsStore = useProductsStore();
const cartItemStore = useCartItemStore();
const cartStore = useCartStore();
const route = useRoute();

const featuresHeadingTxt = ref('features');
const productEquipmentHeadingTxt = ref('in the box');

const isDataLoaded = computed(() => productsStore.IS_DATA_LOADED);
const product = computed(() => {
    let id = Number(route.params.id);
    return productsStore.data.filter((el) => el.id == id)[0];
});

const addItemToCart = () => {
    if (cartItemStore.items.length !== 0)
        cartStore.productReceived(
            cartItemStore.items[cartItemStore.items.length - 1],
        );
    cartItemStore.items.length = 0;
};

const preparePrice = (value: number) => {
    return value.toFixed(2).toString().replace('.', ',');
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
.item {
    padding-top: 2rem;
}
.item__price {
    font-size: 1.9rem;
    font-weight: 700;
}
.item__calculation {
    margin: 5.5rem 0;
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
    color: var(--gray);
    font-size: 1.5rem;
    line-height: 1.6;
    font-weight: 500;
}

.features__first-paragraph {
    margin-bottom: 2rem;
}

.equipment__heading {
    margin-top: 6rem;
    padding-bottom: 2rem;
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
@media only screen and (min-width: 768px) {
    .features__heading {
        font-size: 3.2rem;
    }
    .equipment {
        display: flex;
        margin-top: 6rem;
    }
    .equipment__heading {
        margin-top: 0;
        flex-basis: 50%;
    }

    .equipment__list {
        flex-basis: 50%;
        padding-left: 1rem;
    }
}
@media only screen and (min-width: 1025px) {
    .d-flex {
        display: flex;
    }

    .features {
        padding-right: 5rem;
        flex-basis: 65%;
        margin-right: 2.5rem;
    }
    .equipment {
        padding-left: 3rem;
        display: block;
        flex-basis: 35%;
    }
    .equipment__heading {
        padding-bottom: 0;
        font-size: 3.2rem;
    }

    .features__heading,
    .equipment__heading {
        margin-bottom: 3rem;
    }
}
</style>
@/stores/cartItem

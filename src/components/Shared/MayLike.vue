<template>
    <section class="may-like" :products="products">
        <h2 class="my-like__heading">you also make like</h2>
        <div role="list" class="may-like__list">
            <the-card
                v-for="item in products.others"
                role="listitem"
                :cartClass="['may-like__list-item']"
                :srcMobile="item.image.mobile"
                :srcTablet="item.image.tablet"
                :srcTabletSecond="item.image.tablet"
                :srcDesktop="item.image.desktop"
                :alt="item.name"
            >
                <div class="my__like-bottom">
                    <h3 class="my-like__item">{{ item.name }}</h3>
                    <main-button
                        @click="findPathToProduct(item.slug)"
                        text="see product"
                        :class="['main-btn', 'main-btn--orange']"
                    ></main-button>
                </div>
            </the-card>
        </div>
    </section>
</template>

<script setup lang="ts">
import TheCard from './TheCard.vue';
import MainButton from './ActionButton.vue';
import type {Product} from '@/stores/types';
import {type PropType} from 'vue';
import {useProductsStore} from '@/stores/products';
import {ref} from 'vue';
import {useRouter} from 'vue-router';

const router = useRouter();

const store = useProductsStore();
let link = ref('');

const findPathToProduct = (name: string) => {
    const item = store.data.filter((item) => item.slug.includes(name));
    const itemId = item[0].id;
    link.value = `/product/${itemId}`;
    router.push(link.value);
};

defineProps({
    item: {
        type: Object as PropType<Product>,
        default: {},
    },
    products: {
        type: Object as PropType<Product>,
        default: {},
    },
});
</script>

<style scoped>
.may-like {
    text-align: center;
    margin: 8rem 0;
}
.my-like__heading {
    padding: 1rem 0 4rem 0rem;
    text-transform: uppercase;
    font-size: 2.5rem;
    font-weight: 800;
    letter-spacing: 0.2rem;
}
.my-like__item {
    padding: 2rem 0 3rem 0;
    text-transform: uppercase;
    font-size: 2.4rem;
    font-weight: 700;
    letter-spacing: 0.2rem;
}
@media only screen and (min-width: 768px) {
    .may-like__list {
        display: flex;
    }
    .my-like__heading {
        font-size: 3.2rem;
        font-weight: 700;
        letter-spacing: 0.2rem;
    }
}
</style>

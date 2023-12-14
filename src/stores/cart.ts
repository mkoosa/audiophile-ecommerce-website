import {defineStore} from 'pinia';
import {computed, ref} from 'vue';

import {preparePrice} from '@/api/preparePrice';

import {useProductsStore} from './products';

import type {Product, Quantities} from './types';
export const useCartStore = defineStore('cart', () => {
    const productStore = useProductsStore();
    const quantitiesStore = {};
    let initial = true;
    const orderedProducts = ref(<Product[]>[]);
    const productsQuantities = ref(<Quantities[]>[quantitiesStore]);
    const totalItems = ref(0);
    const totalItemsValue = ref(0);

    const prepareQuantitiesObject = () => {
        productStore.data.forEach((el: Product) => {
            productsQuantities.value[0][el.name] = 0;
        });
    };

    const populateQuantities = (name: string, count: number) => {
        productsQuantities.value[0][name] = count;
    };

    const productReceived = (product: Product) => {
        const index = orderedProducts.value.findIndex((el) => {
            return product.id === el.id;
        });
        if (index !== -1) {
            orderedProducts.value[index] = product;
            populateQuantities(
                product.name,
                product.count + productsQuantities.value[0][product.name],
            );

            return;
        }

        if (initial) prepareQuantitiesObject();
        populateQuantities(product.name, product.count);
        orderedProducts.value = [...orderedProducts.value, {...product}];
        totalItems.value += 1;
        initial = false;
    };

    const increaseProductQuantity = (product: Product) => {
        productsQuantities.value[0][product.name]++;
    };

    const decreaseProductQuantity = (product: Product) => {
        if (productsQuantities.value[0][product.name] < 1) return;
        productsQuantities.value[0][product.name]--;
    };
    const removeAllProducts = () => {
        orderedProducts.value.length = 0;
        prepareQuantitiesObject();
        totalItemsValue.value = 0;
    };

    const calculateCartTotalProductsValue = () => {
        totalItemsValue.value = 0;
        orderedProducts.value.forEach((item) => {
            for (const key in productsQuantities.value[0]) {
                if (item.name === key) {
                    totalItemsValue.value +=
                        productsQuantities.value[0][key] * item.price;
                }
            }
        });
    };

    const PRODUCTS_IN_CART = computed(() => orderedProducts.value);
    const PRODUCTS_QUANTITIES = computed(() => productsQuantities.value);
    const TOTAL_PRODUCTS_VALUE = computed(() =>
        preparePrice(totalItemsValue.value),
    );

    return {
        orderedProducts,
        productsQuantities,
        decreaseProductQuantity,
        increaseProductQuantity,
        productReceived,
        calculateCartTotalProductsValue,
        removeAllProducts,
        PRODUCTS_IN_CART,
        PRODUCTS_QUANTITIES,
        TOTAL_PRODUCTS_VALUE,
    };
});

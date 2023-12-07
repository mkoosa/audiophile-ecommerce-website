import {defineStore} from 'pinia';
import {computed, ref} from 'vue';

import {useProductsStore} from './products';

import type {Product, Quantities} from './types';

export const useCartStore = defineStore('cart', () => {
    const productStore = useProductsStore();
    const quantitiesStore = {};
    let initial = true;
    const products = ref(<Product[]>[]);
    const quantities = ref(<Quantities[]>[quantitiesStore]);
    const totalItems = ref(0);

    const prepareQuantitiesObject = () => {
        productStore.data.forEach((el: Product) => {
            quantities.value[0][el.name] = 0;
        });
    };

    const populateQuantities = (name: string, count: number) => {
        quantities.value[0][name] = count;
    };

    const productReceived = (product: Product) => {
        const index = products.value.findIndex((el) => {
            return product.id === el.id;
        });
        if (index !== -1) {
            products.value[index] = product;
            populateQuantities(
                product.name,
                product.count + quantities.value[0][product.name],
            );
            return;
        }

        if (initial) prepareQuantitiesObject();
        populateQuantities(product.name, product.count);
        products.value = [...products.value, {...product}];
        totalItems.value += 1;
        initial = false;
    };

    const PRODUCTS_IN_CART = computed(() => products.value);
    const PRODUCTS_QUANTITIES = computed(() => quantities.value);

    return {
        products,
        quantities,
        productReceived,
        PRODUCTS_IN_CART,
        PRODUCTS_QUANTITIES,
    };
});

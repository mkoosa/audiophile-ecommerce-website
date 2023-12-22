import {getDatabase, onValue, ref} from 'firebase/database';
import {ref as vueRef} from 'vue';

import type {Router} from 'vue-router';

import type {Product} from '@/stores/types';
const db = getDatabase();
const isDataLoaded = vueRef(false);
interface Store {
    [key: string]: any;
}

const getData = (store: Store, categoryName: string) => {
    if (store.GET_DATA.length !== 0) return;
    onValue(ref(db, `${categoryName}`), (snapshot) => {
        try {
            const value = snapshot.val();
            store.populateData(value);
            store.checkIfDataIsLoaded();
            if (store.isDataLoaded) isDataLoaded.value = true;
        } catch (error) {
            console.log('Ups something wrong', error);
        }
    });
};

const getDataAndFindItem = (value: String, items: Product[], store: Store) => {
    if (store.GET_DATA.length !== 0) {
        return items.filter((item) => item.name === value);
    }
    getData(store, 'products');
};

//router's instance should be invoked directly in component
const openProductPage = (text: string, store: Store, router: Router) => {
    const item = getDataAndFindItem(text, store.GET_DATA, store);
    if (item !== undefined) {
        router.push({path: `/product/${item[0].id}`});
    }
};

export {getData, openProductPage};

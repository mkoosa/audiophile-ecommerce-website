import type {Router} from 'vue-router';
import type {Store} from '@/stores/types';

const checkout = (router: Router, store: Store) => {
    router.push({name: 'Checkout'});
    store.toggleDrawer();
};

const removeAllProducts = (
    cartStore: Store,
    drawerStore: Store,
    callBack: Function,
) => {
    cartStore.removeAllProducts();
    drawerStore.toggleDrawer();
    callBack();
};

export {checkout, removeAllProducts};

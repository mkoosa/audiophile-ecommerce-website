/*eslint disabled*/

import '@/assets/css/main.css';

import {createPinia} from 'pinia';
import {createApp} from 'vue';

// @ts-ignore
import db from '@/firebase/firebase';
import router from '@/router';
import {useDataStore} from '@/stores/data';
import {useHeadphonesStore} from '@/stores/headphones';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

import App from './App.vue';

library.add(fas);
library.add(fab);
const app = createApp(App);
const pinia = createPinia();
app.use(pinia)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app');
const dataStore = useDataStore();
const headphonesStore = useHeadphonesStore();

export {db, dataStore, headphonesStore};

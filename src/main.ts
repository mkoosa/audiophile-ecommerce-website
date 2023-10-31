import '@/assets/css/main.css';

import {createPinia} from 'pinia';
import {createApp} from 'vue';

import {library} from '@fortawesome/fontawesome-svg-core';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

import App from './App.vue';

library.add(faShoppingCart);
const app = createApp(App);
const pinia = createPinia();
app.use(pinia).component('font-awesome-icon', FontAwesomeIcon).mount('#app');

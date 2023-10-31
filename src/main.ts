import '@/assets/css/main.css';

import {createApp} from 'vue';

import {library} from '@fortawesome/fontawesome-svg-core';
import {faShoppingCart, faUserSecret} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

import App from './App.vue';

library.add(faShoppingCart);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');

// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyAqBaojRZ-nHW7xbS1j_JBpP025Mru5e6k',
    authDomain: 'audiophile-ecommerce-web-79de8.firebaseapp.com',
    databaseURL:
        'https://audiophile-ecommerce-web-79de8-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'audiophile-ecommerce-web-79de8',
    storageBucket: 'audiophile-ecommerce-web-79de8.appspot.com',
    messagingSenderId: '1030688668374',
    appId: '1:1030688668374:web:9911f18a76d1f64f236777',
    measurementId: 'G-Z8EDF6R109',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;

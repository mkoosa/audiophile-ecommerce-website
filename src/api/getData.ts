import {getDatabase, onValue, ref} from 'firebase/database';
import {ref as vueRef} from 'vue';

const db = getDatabase();
const isDataLoaded = vueRef(false);
interface Store {
    [key: string]: any;
}

export const getData = (store: Store, categoryName: string) => {
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

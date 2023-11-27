import {getDatabase, onValue, ref} from 'firebase/database';
import {ref as vueRef} from 'vue';

const db = getDatabase();
const isDataLoaded = vueRef(false);

export const getData = (store: any, categoryName: string) => {
    if (store.GET_DATA.length !== 0) return;
    onValue(ref(db, `${categoryName}`), (snapshot) => {
        const value = snapshot.val();
        store.populateData(value);
        store.checkIfDataIsLoaded();
        if (store.isDataLoaded) isDataLoaded.value = true;
    });
};

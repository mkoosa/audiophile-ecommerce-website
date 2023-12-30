import {GenericObject} from 'vee-validate';
import {computed} from 'vue';

import {checkoutStore} from '@/main';

const onSubmit = (values: GenericObject, actions: GenericObject) => {
    console.log(values);
    checkoutStore.concatDetails();
    checkoutStore.acceptForm();
    actions.resetForm();
};
const onInvalidSubmit = () => {
    const submitBtn = document.querySelector('.submit-btn');
    if (submitBtn !== null) {
        submitBtn.classList.add('invalid');
        setTimeout(() => {
            submitBtn.classList.remove('invalid');
        }, 1000);
    }
};

const iSCashOnDelivery = computed(() =>
    checkoutStore.PAYMENT_METHOD === 'Cash on Delivery' ? true : false,
);

export {onSubmit, onInvalidSubmit, iSCashOnDelivery};

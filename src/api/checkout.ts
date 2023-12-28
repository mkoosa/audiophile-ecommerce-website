import {GenericObject} from 'vee-validate';

import {checkoutStore} from '@/main';

const onSubmit = (values: GenericObject) => {
    console.log(values);
    checkoutStore.concatDetails();
    checkoutStore.acceptForm();
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

export {onSubmit, onInvalidSubmit};

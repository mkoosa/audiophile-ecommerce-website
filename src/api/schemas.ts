import * as Yup from 'yup';

import {iSCashOnDelivery} from '@/api/checkout';

const formSchema = Yup.object().shape({
    Name: Yup.string().required('The name is required'),
    ['E-mail']: Yup.string().email().required('The e-mail is required'),
    ['Phone Number']: Yup.string()
        .required('The phone number is required')
        .max(12)
        .matches(/^[0-9]+$/gi, 'Phone number must be a number'),
    Address: Yup.string().required('The address is required'),
    [`Zip Code`]: Yup.string()
        .required('The Zip Code is required')
        .max(6)
        .matches(/^[0-9]+$/gi, 'Zip Code must be a number'),
    City: Yup.string()
        .required('The city is required')
        .matches(/[a-z]+$/gi, 'only letters'),
    Country: Yup.string()
        .required()
        .matches(/[a-z]+$/gi, 'only letters'),
    Account: Yup.string().when(([], schema) => {
        if (iSCashOnDelivery.value) {
            return schema.notRequired();
        }
        return schema
            .matches(/^[0-9]+$/gi, 'Account must be a number')
            .required('The account number is required');
    }),
    Pin: Yup.string().when(([], schema) => {
        if (iSCashOnDelivery.value) {
            return schema.notRequired();
        }
        return schema
            .min(4)
            .max(4)
            .matches(/^[0-9]+$/gi, 'Account must be a number')
            .required('The Pin is required');
    }),
});

export default formSchema;

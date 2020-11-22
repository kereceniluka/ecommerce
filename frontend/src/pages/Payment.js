import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

// utils
import { isEmpty } from '../utils/helpers';

// components
import CheckoutStepper from '../components/CheckoutStepper/CheckoutStepper';
import PaymentForm from '../components/Forms/PaymentForm/PaymentForm';

const Payment = () => {

    const history = useHistory();

    const { shippingAddress } = useSelector(state => state.cart)

    useEffect(() => {
        if(isEmpty(shippingAddress)) {
            history.push('/shipping');
        }
    }, [shippingAddress, history]);

    return (
        <>
            <CheckoutStepper step1 step2 />
            <PaymentForm />
        </>
    );
}

export default Payment;
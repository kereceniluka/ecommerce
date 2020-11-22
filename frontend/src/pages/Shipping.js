import React from 'react';

// components
import CheckoutStepper from '../components/CheckoutStepper/CheckoutStepper';
import ShippingForm from '../components/Forms/ShippingForm/ShippingForm';

const Shipping = () => {
    return (
        <>
            <CheckoutStepper step1 />
            <ShippingForm />
        </>
    );
}

export default Shipping;
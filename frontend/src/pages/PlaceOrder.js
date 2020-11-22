import React from 'react';

// components
import CheckoutStepper from '../components/CheckoutStepper/CheckoutStepper';
import OrderSummary from '../components/OrderSummary/OrderSummary';

const PlaceOrder = () => {
    return (
        <>
            <CheckoutStepper step1 step2 step3 />
            <OrderSummary />
        </>
    );
}

export default PlaceOrder;
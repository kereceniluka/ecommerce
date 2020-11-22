import React from 'react';
import {
    Container,
    Inner,
    StepIcon,
    SignInIcon,
    ShippingIcon,
    PaymentIcon,
    OrderIcon,
    CheckIcon,
    StepLink,
    StepTitle,
} from './CheckoutStepperStyle';

const CheckoutStepper = ({ step1, step2, step3, step4 }) => {
    return (
        <Container>
            <Inner>
                <StepIcon>
                    {step1 ? (
                        <>
                            <CheckIcon size="20" />
                            <StepLink to="/login">Sign In</StepLink>
                        </> ) : (
                        <>
                            <SignInIcon size="20" />
                            <StepTitle>Sign In</StepTitle>
                        </>
                    )}
                </StepIcon>
                <StepIcon>
                    {step2 ? (
                        <>
                            <CheckIcon size="20" />
                            <StepLink to="/shipping">Shipping</StepLink>
                        </> ) : (
                        <>
                            <ShippingIcon size="20" />
                            <StepTitle>Shipping</StepTitle>
                        </>
                    )}
                </StepIcon>
                <StepIcon>
                    {step3 ? (
                        <>
                            <CheckIcon size="20" />
                            <StepLink to="/payment">Payment</StepLink>
                        </> ) : (
                        <>
                            <PaymentIcon size="20" />
                            <StepTitle>Payment</StepTitle>
                        </>
                    )}
                </StepIcon>
                <StepIcon>
                    {step4 ? (
                        <>
                            <CheckIcon size="20" />
                            <StepLink to="/place-order">Place order</StepLink>
                        </> ) : (
                        <>
                            <OrderIcon size="20" />
                            <StepTitle>Place order</StepTitle>
                        </>
                    )}
                </StepIcon>
            </Inner>
        </Container>
    );
}

export default CheckoutStepper;
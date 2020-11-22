import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {
    Container,
    Inner,
    InputContainer,
    Label,
    RadioInput,
    SubmitBtn,
} from '../FormStyle';

// actions
import { savePaymentMethod } from '../../../actions/cart';

const PaymentForm = () => {

    const history = useHistory();

    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm();

    const onSubmit = ({ paymentMethod }) => {
        dispatch(savePaymentMethod(paymentMethod));
        history.push('/place-order');
    }

    return (
        <Container>
            <Inner onSubmit={handleSubmit(onSubmit)}>
                <InputContainer>
                    <Label>Select method</Label>
                    <RadioInput type="radio" id="payPal" name="paymentMethod" value="PayPal" ref={register} defaultChecked />
                    <label htmlFor="payPal">PayPal / Credit Card</label>
                    <RadioInput type="radio" id="stripe" name="paymentMethod" value="Stripe" ref={register} />
                    <label htmlFor="stripe">Stripe</label>
                    <SubmitBtn type="submit">Continue</SubmitBtn>
                </InputContainer>
            </Inner>
        </Container>
    );
}

export default PaymentForm;
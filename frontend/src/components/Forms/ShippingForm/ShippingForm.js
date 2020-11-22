import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {
    Container,
    Inner,
    InputContainer,
    Label,
    Input,
    SelectInput,
    SubmitBtn,
    ErrorMessage
} from '../FormStyle';

// data
import countries from '../../../data/countries.json';

// actions
import { saveShippingAddress } from '../../../actions/cart';

const schema = yup.object().shape({
    address: yup.string().required('Address is required.'),
    city: yup.string().required('City is required.'),
    postalCode: yup.string().required('Postal code is required.'),
    country: yup.string().required('Country is required.'),
});

const ShippingForm = () => {

    const history = useHistory();

    const dispatch = useDispatch();
    const { address, city, postalCode, country } = useSelector(state => state.cart.shippingAddress);

    const [shippingDetails, setShippingDetails] = useState({
        address,
        city,
        postalCode,
        country,
    });

    const { register, handleSubmit, errors } = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(schema),
    });

    const onSubmit = data => {
        dispatch(saveShippingAddress(data));
        history.push('/payment');
    }

    return (
        <Container>
            <Inner onSubmit={handleSubmit(onSubmit)}>
                <InputContainer>
                    <Label htmlFor="address">Address</Label>
                    <Input 
                        type="text" 
                        name="address"
                        value={shippingDetails.address} 
                        ref={register}
                        onChange={({ target }) => setShippingDetails({ ...shippingDetails, address: target.value })} 
                    />
                    {errors.address?.message && <ErrorMessage>{errors.address.message}</ErrorMessage>}
                </InputContainer>
                <InputContainer>
                    <Label htmlFor="city">City</Label>
                    <Input 
                        type="text"
                        name="city"
                        value={shippingDetails.city} 
                        ref={register}
                        onChange={({ target }) => setShippingDetails({ ...shippingDetails, city: target.value })}    
                    />
                    {errors.city?.message && <ErrorMessage>{errors.city.message}</ErrorMessage>}
                </InputContainer>
                <InputContainer>
                    <Label htmlFor="postalCode">Postal code</Label>
                    <Input 
                        type="text"
                        name="postalCode" 
                        value={shippingDetails.postalCode}
                        ref={register}
                        onChange={({ target }) => setShippingDetails({ ...shippingDetails, postalCode: target.value })}    
                    />
                    {errors.postalCode?.message && <ErrorMessage>{errors.postalCode.message}</ErrorMessage>}
                </InputContainer>
                <InputContainer>
                    <Label htmlFor="country">Country</Label>
                    <SelectInput 
                        name="country" 
                        ref={register}
                        defaultValue={shippingDetails.country !== 'undefined' && shippingDetails.country}
                        onChange={({ target }) => setShippingDetails({ ...shippingDetails, country: target.value })}
                    >
                        {countries.map(({ name, code }) => (
                            <option key={code} value={name}>{name}</option>
                        ))}
                    </SelectInput>
                    {errors.country?.message && <ErrorMessage>{errors.country.message}</ErrorMessage>}
                    <SubmitBtn type="submit">Continue</SubmitBtn>
                </InputContainer>
            </Inner>
        </Container>
    );
}

export default ShippingForm;
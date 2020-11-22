import React from 'react';
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
    SubmitBtn,
    NewUser,
    NewUserLink,
    ErrorMessage,
} from '../FormStyle';

// actions
import { login } from '../../../actions/user';

// components
import Message from '../../Message/Message';

const schema = yup.object().shape({
    email: yup.string().required('Email is required.'),
    password: yup.string().required('Password is required.'),
});

const LoginForm = () => {

    const dispatch = useDispatch();
    const { error } = useSelector(state => state.userLogin);

    const { register, handleSubmit, errors } = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(schema),
    });

    const onSubmit = ({ email, password }) => {
        dispatch(login(email, password));
    }

    return (
        <Container>
            <Inner onSubmit={handleSubmit(onSubmit)}>
                {error && <Message variant="error" message={error} />}
                <InputContainer>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                        type="email" 
                        name="email" 
                        ref={register}  
                    />
                    {errors.email?.message && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                </InputContainer>
                <InputContainer>
                    <Label htmlFor="password">Password</Label>
                    <Input 
                        type="password" 
                        name="password" 
                        ref={register} 
                    />
                    {errors.password?.message && <ErrorMessage>{errors.password?.message}</ErrorMessage>}
                    <SubmitBtn type="submit">Sign In</SubmitBtn>
                </InputContainer>
                <NewUser>I'm a new user. <NewUserLink to="/register">Sign up</NewUserLink></NewUser>
            </Inner>
        </Container>
    )
}

export default LoginForm;
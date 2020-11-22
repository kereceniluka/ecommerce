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
import { register as registerUser } from '../../../actions/user';

// components
import Message from '../../Message/Message';

const schema = yup.object().shape({
    name: yup.string().required('Name is required.'),
    email: yup.string().email('You need enter a valid email.').required('Email is required.'),
    password: yup.string().min(8, 'Password must contain at least 8 characters.').required('Password is required.'),
    confirmPassword: yup.string().required('Confirm password is required.').oneOf([yup.ref('password'), null], 'Passwords must match.'),
});

const RegisterForm = () => {

    const dispatch = useDispatch();
    const { error, userInfo } = useSelector(state => state.userRegister);

    const { register, handleSubmit, errors } = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(schema),
    });

    const onSubmit = ({ name, email, password }) => {
        dispatch(registerUser(name, email, password));
    }

    return (
        <Container>
            <Inner onSubmit={handleSubmit(onSubmit)}>
                {error && <Message variant="error" message={error} />}
                <InputContainer>
                    <Label htmlFor="name">Name</Label>
                    <Input 
                        type="text"
                        name="name"
                        ref={register}   
                    />
                    {errors.name?.message && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                </InputContainer>
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
                    {errors.password?.message && <ErrorMessage>{errors.password.message}</ErrorMessage>}
                </InputContainer>
                <InputContainer>
                    <Label htmlFor="confirmPassword">Confirm password</Label>
                    <Input 
                        type="password"
                        name="confirmPassword"
                        ref={register} 
                    />
                    {errors.confirmPassword?.message && <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>}
                    <SubmitBtn type="submit">Sign Up</SubmitBtn>
                </InputContainer>
                <NewUser>Have an account? <NewUserLink to="/login">Sign in</NewUserLink></NewUser>
            </Inner>
        </Container>
    );
}

export default RegisterForm;
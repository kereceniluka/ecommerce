import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

// utils
import { isEmpty } from '../utils/helpers';

// components
import LoginForm from '../components/Forms/LoginForm/LoginForm';

const Login = () => {

    const history = useHistory();

    const { userInfo } = useSelector(state => state.userLogin);

    useEffect(() => {
        if(!isEmpty(userInfo)) {
            history.push('/');
        }
    }, [history, userInfo]);

    return (
        <>
            <LoginForm />
        </>
    )
}

export default Login;
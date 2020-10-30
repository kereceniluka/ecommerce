import React from 'react';
import { Container } from './CartProductsStyle';

const CartProducts = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    );
}

export default CartProducts;
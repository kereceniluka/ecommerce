import React from 'react';
import { Container } from './ProductsListStyle';

const ProductsList = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    );
}

export default ProductsList;
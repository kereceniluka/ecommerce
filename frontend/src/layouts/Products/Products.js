import React from 'react';
import { Container } from './ProductsStyle';

const Products = ({ children }) => {
    return (
        <Container>
            { children }
        </Container>
    );
}

export default Products;
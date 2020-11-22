import React from 'react';
import { Container } from './ProductsGridStyle';

const ProductsGrid = ({ children }) => {
    return (
        <Container>
            { children }
        </Container>
    );
}

export default ProductsGrid;
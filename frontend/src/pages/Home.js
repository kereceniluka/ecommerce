import React from 'react';

// layouts
import { Container } from '../layouts/Products/ProductsStyle';

// components
import Product from '../components/Product/Product';

// data
import products from '../data/products';

const Home = () => {
    return (
        <Container>
            {products.map(product => <Product key={product._id} {...product} />)}
        </Container>
    );
}

export default Home;
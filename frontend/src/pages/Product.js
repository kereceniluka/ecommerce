import React from 'react';

// data
import products from '../data/products';

// layouts
import ProductDetails from '../layouts/ProductDetails/ProductDetails';

const Product = ({ match }) => {

    const product = products.find(product => product._id === match.params.id);

    return (
        <ProductDetails {...product}/>
    );
}

export default Product;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// actions
import { listProducts } from '../actions/products';

// layouts
import { Container } from '../layouts/Products/ProductsStyle';

// components
import Product from '../components/Product/Product';
import Message from '../components/Message/Message';
import LoaderSpinner from '../components/Loader/Loader';

const Home = () => {

    const dispatch = useDispatch();
    const { loading, error, products } = useSelector(state => state.productList);

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <>
        {loading ? <LoaderSpinner /> : error ? <Message variant="error" title="No products found" message={error} /> : <Container>{products.map(product => <Product key={product._id} {...product} />)}</Container>}
        </>
    );
}

export default Home;
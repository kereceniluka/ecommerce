import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// actions
import { listProducts } from '../actions/products';

// layouts
import { Container } from '../layouts/Products/ProductsStyle';

// components
import Product from '../components/Product/Product';
import LoaderSpinner from '../components/Loader/Loader';

const Home = () => {

    const dispatch = useDispatch();
    const { loading, error, products } = useSelector(state => state.productList);

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <>
        {loading ? <LoaderSpinner /> : error ? <h3>{error}</h3> : <Container>{products.map(product => <Product key={product._id} {...product} />)}</Container>}
        </>
    );
}

export default Home;
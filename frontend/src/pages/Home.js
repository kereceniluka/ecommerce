import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// actions
import { listProducts } from '../actions/products';

// layouts
import ProductsGrid from '../layouts/ProductsGrid/ProductsGrid';

// components
import Product from '../components/Product/Product';
import Message from '../components/Message/Message';
import LoaderSpinner from '../components/Loader/Loader';
import { Container as LoadingContainer } from '../components/Loader/LoaderStyle';

const Home = () => {

    const dispatch = useDispatch();
    const { loading, error, products } = useSelector(state => state.productList);

    useEffect(() => {
        dispatch(listProducts());
        // eslint-disable-next-line
    }, []);

    return (
        <>
        {
            loading ? <LoadingContainer><LoaderSpinner /></LoadingContainer> : 
            error ? <LoadingContainer><Message variant="error" title="No products found" message={error} /></LoadingContainer> : 
            <ProductsGrid>
                {products.map(product => <Product key={product._id} {...product} />)}
            </ProductsGrid>
        }
        </>
    );
}

export default Home;
import React from 'react';
import { useSelector } from 'react-redux';

// layouts
import ProductsGrid from '../layouts/ProductsGrid/ProductsGrid';

// components
import SearchInput from '../components/SearchInput/SearchInput';
import Product from '../components/Product/Product';
import Message from '../components/Message/Message';

const Search = () => {

    const { suggestions } = useSelector(state => state.search);

    return (
        <>
            <SearchInput />
            {typeof suggestions === 'undefined' || suggestions.length === 0 ? 
                <Message variant="info" message="No products found" /> : (
                <ProductsGrid>
                    {suggestions.map(product => <Product key={product._id} {...product} />)}
                </ProductsGrid>
            )}      
        </>
    );
}

export default Search;
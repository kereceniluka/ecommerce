import React from 'react';
import { useSelector } from 'react-redux';

// layouts
import ProductsList from '../layouts/ProductsList/ProductsList';

// components
import FavoriteProduct from '../components/FavoriteProduct/FavoriteProduct';
import Message from '../components/Message/Message';

const Favorites = () => {

    const { favoriteItems } = useSelector(state => state.favorites);

    return (
        <>
            {favoriteItems.length === 0 ? <Message variant="info" message="Your favorites is empty" /> : (
                <ProductsList>
                    {favoriteItems.map(item => <FavoriteProduct key={item.product} {...item}/>)}
                </ProductsList> 
            )}     
        </>
    );
}

export default Favorites;
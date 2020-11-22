import axios from 'axios';
import { FAVORITES_ADD_PRODUCT, FAVORITES_REMOVE_PRODUCT } from '../constants/favorites';

export const addToFavorites = id => async(dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`);
    
    dispatch({
        type: FAVORITES_ADD_PRODUCT,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            stock: data.stock,
        },
    });

    localStorage.setItem('favoriteItems', JSON.stringify(getState().favorites.favoriteItems));
}

export const removeFromFavorites = id => async(dispatch, getState) => {
    dispatch({
        type: FAVORITES_REMOVE_PRODUCT,
        payload: id,
    });

    localStorage.setItem('favoriteItems', JSON.stringify(getState().favorites.favoriteItems));
}
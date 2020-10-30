import axios from 'axios';
import { CART_ADD_PRODUCT, CART_REMOVE_PRODUCT } from '../constants/cart';

export const addToCart = (id, qty) => async(dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`);
    
    dispatch({
        type: CART_ADD_PRODUCT,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            stock: data.stock,
            qty,
        },
    });

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

export const removeFromCart = id => async(dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_PRODUCT,
        payload: id,
    });

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}
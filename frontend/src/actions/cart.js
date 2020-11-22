import axios from 'axios';
import { 
    CART_ADD_PRODUCT, 
    CART_REMOVE_PRODUCT,
    CART_SAVE_SHIPPING_ADDRESS,
    CART_SAVE_PAYMENT_METHOD,
} from '../constants/cart';

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

export const saveShippingAddress = data => async(dispatch) => {
    dispatch({
        type: CART_SAVE_SHIPPING_ADDRESS,
        payload: data,
    });

    localStorage.setItem('shippingAddress', JSON.stringify(data));
}

export const savePaymentMethod = data => async(dispatch) => {
    dispatch({
        type: CART_SAVE_PAYMENT_METHOD,
        payload: data,
    });

    localStorage.setItem('paymentMethod', JSON.stringify(data));
}
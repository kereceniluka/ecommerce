import { CART_ADD_PRODUCT, CART_REMOVE_PRODUCT } from '../constants/cart';

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch(action.type) {
        case CART_ADD_PRODUCT:
            const item = action.payload;
            const existProduct = state.cartItems.find(i => i.product === item.product);

            if(existProduct) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(i => i.product === existProduct.product ? item : i),
                };
            }
            else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                };
            }
        case CART_REMOVE_PRODUCT:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.product !== action.payload),
            };
        default:
            return state;
    }
}
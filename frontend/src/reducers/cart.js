import { 
    CART_ADD_PRODUCT, 
    CART_REMOVE_PRODUCT, 
    CART_SAVE_SHIPPING_ADDRESS,
    CART_SAVE_PAYMENT_METHOD,
} from '../constants/cart';

export const cartReducer = (state = { cartItems: [], shippingAddress: {}, paymentMethod: '' }, action) => {
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
        case CART_SAVE_SHIPPING_ADDRESS:
            return {
                ...state,
                shippingAddress: action.payload,
            };
        case CART_SAVE_PAYMENT_METHOD:
            return {
                ...state,
                paymentMethod: action.payload,
            };
        default:
            return state;
    }
}
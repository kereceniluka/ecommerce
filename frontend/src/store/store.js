import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// reducers
import { productListReducer } from '../reducers/products';
import { productDetailsReducer } from '../reducers/products';
import { cartReducer } from '../reducers/cart';
import { favoritesReducer } from '../reducers/favorites';
import { searchReducer } from '../reducers/search';
import { userLoginReducer, userRegisterReducer } from '../reducers/user';
import { orderCreateReducer } from '../reducers/order';

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    favorites: favoritesReducer,
    search: searchReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    orderCreate: orderCreateReducer,
});

// Getting data from storage
const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
const favoriteItemsFromStorage = localStorage.getItem('favoriteItems') ? JSON.parse(localStorage.getItem('favoriteItems')) : [];
const searchFromStorage = localStorage.getItem('search') ? JSON.parse(localStorage.getItem('search')) : {};
const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : {};
const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {};
const paymentMethodFromStorage = localStorage.getItem('paymentMethod') ? JSON.parse(localStorage.getItem('paymentMethod')) : '';

const initialState = {
    cart: {
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage,
        paymentMethod: paymentMethodFromStorage,
    },
    favorites: {
        favoriteItems: favoriteItemsFromStorage,
    },
    search: searchFromStorage,
    userLogin: {
        userInfo: userInfoFromStorage,
    },
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
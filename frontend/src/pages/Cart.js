import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// actions
import { addToCart } from '../actions/cart';

// layout
import ProductsList from '../layouts/ProductsList/ProductsList';

// components
import CartProduct from '../components/CartProduct/CartProduct';
import Message from '../components/Message/Message';
import {
    CheckoutContainer,
    SubTotalLabel,
    SubTotalPrice,
    CheckoutBtn,
} from '../components/CartProduct/CartProductStyle';

const Cart = ({ match, location }) => {

    const productId = match.params.id;
    const qty = location.search ? Number(location.search.split('=')[1]) : 1;

    const dispatch = useDispatch();
    const { cartItems } = useSelector(state => state.cart);

    const history = useHistory();

    useEffect(() => {
        if(productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);

    const handleCheckout = () => {
        history.push('/shipping');
    }

    return (
        <>
            <CheckoutContainer>
                <SubTotalLabel>Cart Sub-Total</SubTotalLabel>
                <SubTotalPrice>${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</SubTotalPrice>
                <CheckoutBtn type="button" disabled={cartItems.length === 0} onClick={handleCheckout}>Checkout</CheckoutBtn>
            </CheckoutContainer>
            {cartItems.length === 0 ? <Message variant="info" message="Your cart is empty" /> : (
                <ProductsList>
                    {cartItems.map(item => <CartProduct key={item.product} {...item} />)}
                </ProductsList>
            )}
        </>
    );
}

export default Cart;
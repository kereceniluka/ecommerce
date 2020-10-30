import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// actions
import { addToCart } from '../actions/cart';

// layout
import CartProducts from '../layouts/CartProducts/CartProducts';

// components
import CartProduct from '../components/CartProduct/CartProduct';
import {
    CheckoutContainer,
    SubTotalLabel,
    SubTotalPrice,
    CheckoutBtn,
} from '../components/CartProduct/CartProductStyle';

const Cart = ({ match, location, history }) => {

    const productId = match.params.id;
    const qty = location.search ? Number(location.search.split('=')[1]) : 1;

    const dispatch = useDispatch();
    const { cartItems } = useSelector(state => state.cart);

    useEffect(() => {
        if(productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);

    const handleCheckout = () => {
        history.push('/login?redirect=shipping');
    }

    return (
        <>
            <CheckoutContainer>
                <SubTotalLabel>Cart Sub-Total</SubTotalLabel>
                <SubTotalPrice>${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</SubTotalPrice>
                <CheckoutBtn type="button" disabled={cartItems.length === 0} onClick={handleCheckout}>Checkout</CheckoutBtn>
            </CheckoutContainer>
            {cartItems.length === 0 ? <h2>Your cart is empty</h2> : (
                <CartProducts>
                    {cartItems.map(item => <CartProduct key={item.product} {...item} />)}
                </CartProducts>
            )}
        </>
    );
}

export default Cart;
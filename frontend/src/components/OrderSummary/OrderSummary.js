import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    Container,
    Inner,
    Title,
    ContentWrapper,
    Text,
    OrderItem,
    Image,
    Name,
    Price,
    OrderInfo, 
    ContentDivider,
    PlaceOrderBtn,
} from './OrderSummaryStyle';

// actions
import { createOrder } from '../../actions/order';

const OrderSummary = () => {

    const history = useHistory();

    const dispatch = useDispatch();

    const { cartItems, shippingAddress, paymentMethod } = useSelector(state => state.cart);
    const { orderInfo, success, error } = useSelector(state =>  state.orderCreate);

    const itemsPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
    const shippingPrice = itemsPrice > 100 ? 0 : 12;
    const taxPrice = Number((0.25 * itemsPrice).toFixed(2));
    const totalPrice = Number((itemsPrice + shippingPrice + taxPrice).toFixed(2));

    useEffect(() => {
        if(success) {
            history.push(`/order/${orderInfo._id}`);
        }
        // eslint-disable-next-line
    }, [success, history]);

    const handlePlaceOrder = () => {
        dispatch(createOrder({
            orderItems: cartItems,
            shippingAddress: shippingAddress,
            paymentMethod: paymentMethod,
            itemsPrice: itemsPrice,
            shippingPrice: shippingPrice,
            taxPrice: taxPrice,
            totalPrice: totalPrice,
        }));
    }

    return (
        <Container>
            <Inner>
                <ContentWrapper>
                    <Title>Shipping address</Title>
                    <Text>{shippingAddress.address}</Text>
                    <Text>{`${shippingAddress.postalCode}, ${shippingAddress.city}`}</Text>
                    <Text>{shippingAddress.country}</Text>
                </ContentWrapper>
                <ContentDivider />
                <ContentWrapper>
                    <Title>Payment method</Title>
                    <Text>{`Method: ${paymentMethod}`}</Text>
                </ContentWrapper>
                <ContentDivider />
                <ContentWrapper>
                    <Title>Order items</Title>
                    {cartItems.map(({ product, name, image, price, qty }) => (
                        <OrderItem key={product}>
                            <Image src={image} alt={name} />
                            <Name>{name}</Name>
                            <Price>{`${qty} x $${price}`}</Price>
                        </OrderItem>
                    ))}
                </ContentWrapper>
                <ContentDivider />
                <ContentWrapper>
                    <Title>Order summary</Title>
                    <OrderInfo>
                        <Text>Items:</Text>
                        <Text>${itemsPrice}</Text>
                        <Text>Shipping:</Text>
                        <Text>${shippingPrice}</Text>
                        <Text>Tax:</Text>
                        <Text>${taxPrice}</Text>
                        <Text>Total:</Text>
                        <Text>${totalPrice}</Text>
                    </OrderInfo>
                    <PlaceOrderBtn type="button" onClick={handlePlaceOrder}>Place order</PlaceOrderBtn>
                </ContentWrapper>
            </Inner>
        </Container>
    );
}

export default OrderSummary;
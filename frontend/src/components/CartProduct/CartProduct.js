import React from 'react';
import { useDispatch } from 'react-redux';
import {
    Container,
    Inner,
    Image,
    Header,
    Name,
    RemoveIcon,
    Price,
    InputContainer,
    Label,
    QtyInput,
} from './CartProductStyle';

// actions
import { removeFromCart, addToCart } from '../../actions/cart';

const CartProduct = ({ product, name, image, price, stock, qty }) => {

    const dispatch = useDispatch();

    const handleRemoveFromCart = id => {
        dispatch(removeFromCart(id));
    }

    return (
        <Container>
            <Inner>
                <Image src={image} alt={name} />
                <Header>
                    <Name to={`/product/${product}`}>{name}</Name>
                    <RemoveIcon size="16" onClick={() => handleRemoveFromCart(product)}/>
                </Header>
                <Price>${price}</Price>
                <InputContainer>
                    <Label htmlFor="qty">Qty:</Label>
                    <QtyInput name="qty" id="qty" value={qty} onChange={({ target }) => dispatch(addToCart(product, Number(target.value)))}>
                        {[...Array(stock).keys()].map(k => (
                            <option key={k + 1} value={k + 1}>{k + 1}</option>
                        ))}
                    </QtyInput>
                </InputContainer>
            </Inner>
        </Container>
    );
}

export default CartProduct;
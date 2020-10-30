import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {    
    Container,
    Inner,
    Image,
    Title,
    Price,
    Info,
    InputContainer,
    Label,
    QtyInput,
    AddToCartBtn,
    FavoriteBtn,
    AddedFavoriteIcon,
    FavoriteIcon,
    DescriptionContainer,
    DescriptionTitle,
    ProductDescription,
} from '../layouts/ProductDetails/ProductDetailsStyle';

// actions
import { listProductDetails } from '../actions/products';

// components
import LoaderSpinner from '../components/Loader/Loader';

const Product = ({ match, history }) => {

    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
    const { loading, error, product } = useSelector(state => state.productDetails);

    useEffect(() => {
        dispatch(listProductDetails(match.params.id));
    }, [dispatch]);

    const handleAddToCart = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`);
    }

    return (
        <Container>
            <Inner>
                <Image src={product.image} alt={product.name} />
                <Title>{product.name}</Title>
                <Price>${product.price}</Price>
                <Info>Free Delivery and returns.</Info>
                <InputContainer>
                    <Label htmlFor="qty">Qty:</Label>
                    {product.stock > 0 ? (
                        <QtyInput name="qty" id="qty" onChange={({ target }) => setQty(target.value)}>
                            {[...Array(product.stock).keys()].map(k => (
                                <option key={k + 1} value={k + 1}>{k + 1}</option>
                            ))}
                        </QtyInput>
                    ) : <span>Out of stock</span>}
                </InputContainer>
                <AddToCartBtn type="button" disabled={product.stock === 0} onClick={handleAddToCart}>Add to cart</AddToCartBtn>
                <FavoriteBtn>
                    {product.favorite ? <AddedFavoriteIcon size="22" /> : <FavoriteIcon size="22" />}
                </FavoriteBtn>
                <DescriptionContainer>
                    <DescriptionTitle>Product details</DescriptionTitle>
                    <ProductDescription>{product.description}</ProductDescription>
                </DescriptionContainer>
            </Inner>
        </Container>
    );
}

export default Product;
import React from 'react';
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
} from './ProductDetailsStyle';

const ProductDetails = ({ name, image, description, price, rating, favorite, stock, discount }) => {
    return (
        <Container>
            <Inner>
                <Image src={image} alt={name} />
                <Title>{name}</Title>
                <Price>${price}</Price>
                <Info>Free Delivery and returns.</Info>
                <InputContainer>
                    <Label>Qty:</Label>
                    <QtyInput type="number" />
                </InputContainer>
                <AddToCartBtn type="button">Add to cart</AddToCartBtn>
                <FavoriteBtn>
                    {favorite ? <AddedFavoriteIcon size="22" /> : <FavoriteIcon size="22" />}
                </FavoriteBtn>
                <DescriptionContainer>
                    <DescriptionTitle>Product details</DescriptionTitle>
                    <ProductDescription>{description}</ProductDescription>
                </DescriptionContainer>
            </Inner>
        </Container>
    );
}

export default ProductDetails;
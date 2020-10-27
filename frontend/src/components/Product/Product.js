import React, { useEffect, useState } from 'react';
import {
    Container,
    Inner,
    FavoriteIcon,
    AddedFavoriteIcon,
    Image,
    Name,
    BodySection,
    StarIcon,
    RatingValue,
    Stock,
    Bottom,
    Price,
    Discount,
    AddToCartBtn,
    AddIcon,
} from './ProductStyle';

const Product = ({ _id, name, image, price, rating, favorite, stock, discount}) => {

    const [stockValue, setStockValue] = useState(null);

    const getStock = () => {
        if (stock > 10) {
            return <Stock color="#6eeb83">In Stock</Stock>;
        }
        else if (stock > 0 && stock <= 10) {
            return <Stock color="#f3a712">{stock} available</Stock>;
        }
        else {
            return <Stock color="#db2b39">Out Of Stock</Stock>;
        }
    }

    useEffect(() => {
        setStockValue(getStock());
    }, [stock]);

    return (
        <Container>
            <Inner>
                {favorite ? <AddedFavoriteIcon size="20" /> : <FavoriteIcon size="20" />}
                <Image src={image} alt={name} />
                <Name to={`/product/${_id}`}>{name}</Name>
                <BodySection>
                    <RatingValue><StarIcon size="14" />({rating})</RatingValue>
                    {stockValue}
                </BodySection>
                <Bottom>
                    <Price discount={discount}>${price}</Price>
                    {/* <Discount>{discount}</Discount> */}
                    <AddToCartBtn type="button" disabled={stock === 0 ? true : false}>
                        <AddIcon size="14" />
                    </AddToCartBtn>
                </Bottom>
            </Inner>
        </Container>
    );
}

export default Product;
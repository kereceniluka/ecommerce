import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Container,
    Inner,
    FavoriteIcon,
    AddedFavoriteIcon,
    Image,
    Name,
    BodySection,
    RatingWrapper,
    StarIcon,
    RatingValue,
    Stock,
    Bottom,
    Price,
    AddToCartBtn,
    AddIcon,
} from './ProductStyle';

// actions
import { addToCart } from '../../actions/cart';
import { addToFavorites, removeFromFavorites } from '../../actions/favorites';

const Product = ({ _id, name, image, price, avgRating, favorite, stock, discount}) => {

    const [isFavorite, setIsFavorite] = useState(false);

    const dispatch = useDispatch();
    const { favoriteItems } = useSelector(state => state.favorites);

    useEffect(() => {
        favoriteItems.forEach(({ product }) => product === _id && setIsFavorite(true));
    }, [stock, _id, favoriteItems]);

    const handleAddToCart = (id, qty = 1) => {
        dispatch(addToCart(id, qty));
    }

    const handleAddToFavorites = id => {
        dispatch(addToFavorites(id));
    }

    const handleRemoveFromFavorites = id => {
        dispatch(removeFromFavorites(id));
        setIsFavorite(false);
    }

    return (
        <Container>
            <Inner>
                {isFavorite ? <AddedFavoriteIcon size="20" onClick={() => handleRemoveFromFavorites(_id)} /> : <FavoriteIcon size="20" onClick={() => handleAddToFavorites(_id)} />}
                <Image src={image} alt={name} />
                <Name to={`/product/${_id}`}>{name}</Name>
                <BodySection>
                    <RatingValue><StarIcon size="14" />{avgRating}</RatingValue>
                    {stock > 0 && stock <= 10 ? <Stock color="#f3a712">{stock} available</Stock> : stock === 0 && <Stock color="#db2b39">Out Of Stock</Stock>}
                </BodySection>
                <Bottom>
                    <Price discount={discount}>${price}</Price>
                    <AddToCartBtn type="button" disabled={stock === 0 ? true : false} onClick={() => handleAddToCart(_id, 1)}>
                        <AddIcon size="14" />
                    </AddToCartBtn>
                </Bottom>
            </Inner>
        </Container>
    );
}

export default Product;
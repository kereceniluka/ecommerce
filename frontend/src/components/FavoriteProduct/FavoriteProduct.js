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
} from './FavoriteProductStyle';

// actions
import { removeFromFavorites } from '../../actions/favorites';

const FavoriteProduct = ({ product, name, image, price, stock }) => {

    const dispatch = useDispatch();

    const handleRemoveFromFavorites = id => {
        dispatch(removeFromFavorites(id));    
    }

    return (
        <Container>
            <Inner>
                <Image src={image} alt={name} />
                <Header>
                    <Name to={`/product/${product}`}>{name}</Name>
                    <RemoveIcon size="16" onClick={() => handleRemoveFromFavorites(product)} />
                </Header>
                <Price>${price}</Price>
            </Inner>
        </Container>
    );
}

export default FavoriteProduct;
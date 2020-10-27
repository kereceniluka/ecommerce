import styled from 'styled-components/macro';
import sizes from '../../utils/responsive';
import { FavoriteBorder } from '@styled-icons/material-outlined/FavoriteBorder';
import { Favorite } from '@styled-icons/material-twotone/Favorite';

export const Container = styled.section `
    width: 100%;
    background-color: #ffffff;
`;

export const Image = styled.img `
    width: 100%;
    height: auto;
    object-fit: contain;
    grid-area: productImage;
`;

export const Title = styled.h1 `
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    color: #2d2d2d;
    padding: 14px 24px;
    grid-area: productTitle;
`;

export const Price = styled.span `
    font-size: 20px;
    font-weight: 700;
    color: #555;
    padding-left: 24px; 
    grid-area: productPrice;
`;

export const Info = styled.span `
    font-size: 14px;
    color: #2d2d2d;
    padding: 10px 24px;
    grid-area: productInfo;
`;

export const InputContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 24px;
    grid-area: inputContainer;
`;

export const Label = styled.label `
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1.7;
    letter-spacing: 1.7px;
    color: #2d2d2d;
`;

export const QtyInput = styled.input `
    width: 50%;
    outline: none;
`;

export const AddToCartBtn = styled.button `
    border: none;
    outline: none;
    width: 80%;
    height: 35px;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 700;
    background-color: #996faf;
    color: #fff;
    text-transform: uppercase;
    margin-left: 24px;
    grid-area: addToCartBtn;
`;

export const FavoriteBtn = styled.button `
    border: none;
    outline: none;
    width: 32%;
    height: 35px;
    border-radius: 6px;
    margin: 0 24px 0 36px; 
    grid-area: favoriteBtn;
`;

export const FavoriteIcon = styled(FavoriteBorder) `
    color: #996faf;
`;

export const AddedFavoriteIcon = styled(Favorite) `
    color: #996faf;
`;

export const DescriptionContainer = styled.div `
    width: 100%;
    padding: 20px 24px;
    grid-area: productDescription;
`;

export const DescriptionTitle = styled.h2 `
    font-size: 14px;
    letter-spacing: 2px;
    line-height: 1.7;
    color: #999;
    text-transform: uppercase;
`;

export const ProductDescription = styled.p `
    text-align: left;
    padding: 12px 0;
    margin: 0 auto;
`;

export const Inner = styled.div `
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
        "productImage productImage"
        "productTitle productTitle"
        "productPrice ."
        "productInfo productInfo"
        "inputContainer ."
        "addToCartBtn favoriteBtn"
        "productDescription productDescription";
`;
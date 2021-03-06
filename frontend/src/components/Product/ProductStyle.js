import styled from 'styled-components/macro';
import sizes from '../../utils/responsive';
import { Link } from 'react-router-dom';
import { FavoriteBorder } from '@styled-icons/material-outlined/FavoriteBorder';
import { Favorite } from '@styled-icons/material-twotone/Favorite';
import { Star } from '@styled-icons/material-outlined/Star';
import { CartPlus } from '@styled-icons/bootstrap/CartPlus';

export const Container = styled.article `
    width: 100%;
    position: relative;
    background-color: #ffffff;
    border-radius: 12px;
    overflow: hidden;
    padding: 6px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

    ${sizes.desktop} {
        width: 85%;
        margin: 0 auto;
    }
`;

export const Inner = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const FavoriteIcon = styled(FavoriteBorder) `
    position: absolute;
    top: 11px;
    right: 12px;
    color: rgba(0,0,0,0.4);

    ${sizes.desktop} {
        width: 26px;
        height: 26px;
        cursor: pointer;
    }
`;

export const AddedFavoriteIcon = styled(Favorite) `
    position: absolute;
    top: 11px;
    right: 12px;
    color: #996faf;

    ${sizes.desktop} {
        width: 26px;
        height: 26px;
        cursor: pointer;
    }
`;

export const Image = styled.img `
    width: 100%;
    height: 60%;
    object-fit: contain;
    border-radius: 12px;
`;

export const Name = styled(Link) `
    text-decoration: none;
    min-height: 20px;
    font-size: 12px;
    font-weight: 700;
    text-align: left;
    color: #3c3d3e;
    margin: 6px 0;

    &&:hover {
        text-decoration: underline;
        cursor: pointer;
    }

    ${sizes.desktop} {
        min-height: 40px;
        font-size: 14px;
    }
`;

export const BodySection = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 6px;
`;

export const StarIcon = styled(Star) `
    color: #f3a712;

    ${sizes.desktop} {
        width: 18px;
        height: 18px;
    }
`;

export const RatingValue = styled.span `
    font-size: 10px;

    ${sizes.desktop} {
        font-size: 12px;
    }
`;

export const Stock = styled.span `
    font-size: 12px;
    color: ${({ color }) => color};

    ${sizes.desktop} {
        font-size: 14px;
    } 
`;

export const Bottom = styled.div `
    width: 100%;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2px;

    ${sizes.desktop} {
        height: 46px;
    }
`;

export const Price = styled.span `
    text-decoration: ${({ discount }) => discount ? 'line-through' : 'none'};
    font-size: /* ${({ discount }) => discount ? '10px' : '16px'} */16px;
    font-weight: ${({ discount }) =>  discount ? '500' : '700'};
    color: ${({ discount }) => discount ? '#b9bbbd' : '#1d1e1f'};
    margin: 8px 0;

    ${sizes.desktop} {
        font-size: 18px;
    }
`;

export const Discount = styled.span `
    font-size: 16px;
    font-weight: 700;
    color: #996faf;
`;

export const AddToCartBtn = styled.button `
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 26px;
    color: #ffffff;
    background-color: #996faf;
    border-radius: 6px;
    cursor: pointer;

    &&:disabled {
        opacity: .4;
        cursor: not-allowed;
    }

    ${sizes.desktop} {
        width: 70px;
        height: 32px;
    }
`;

export const AddIcon = styled(CartPlus) `
    color: #ffffff;
`;
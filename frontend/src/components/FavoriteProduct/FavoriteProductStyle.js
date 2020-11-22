import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { Trash } from '@styled-icons/ionicons-solid/Trash';

export const Container = styled.div `
    width: 100%;
    background-color: #ffffff;
`;

export const Inner = styled.div `
    width: 90%;
    display: grid;
    grid-template-columns: 35% 65%;
    grid-template-areas:
        "productImage header"
        "productImage productPrice";
    row-gap: 10px;
    margin: 0 auto;
    padding: 15px 0;
    border-bottom: 1px solid #eee;
`;

export const Image = styled.img `
    width: 100%;
    min-height: 100%;
    object-fit: contain;
    grid-area: productImage;
`;

export const Header = styled.div `
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-left: 10px;
    grid-area: header;
`;

export const Name = styled(Link) `
    text-decoration: none;
    max-width: 85%;
    font-size: 12px;
    font-weight: 700;
    color: #2d2d2d;

    &&:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

export const RemoveIcon = styled(Trash) `
    color: #2d2d2d;
`;

export const Price = styled.span `
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 2px;
    color: #2d2d2d;
    padding-left: 10px;
    grid-area: productPrice;
`;
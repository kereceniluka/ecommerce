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
        "productImage productPrice"
        "productImage inputContainer";
    row-gap: 10px;
    margin: 0 auto;
    padding: 15px 0;
    border-bottom: 1px solid #eee;
`;

export const CheckoutContainer = styled.div `
    width: 100%;
    min-height: 60px;
    display: grid;
    grid-template-areas:
        "subTotalLabel checkoutBtn"
        "subTotalPrice checkoutBtn";
    background-color: #ffffff;
    padding: 10px 18px;
`;

export const SubTotalLabel = styled.h2 `
    font-size: 12px;
    font-weight: 700;
    color: #2d2d2d;
    line-height: 1.5em;
    letter-spacing: 2px;
    text-transform: uppercase;
    grid-area: subTotalLabel;
`;

export const SubTotalPrice = styled.span `
    font-size: 13px;
    font-weight: 500;
    color: #2d2d2d;
    letter-spacing: .8px;
    grid-area: subTotalPrice;
`;

export const CheckoutBtn = styled.button `
    border: none;
    outline: none;
    width: 95%;
    background-color: #996faf;
    color: #ffffff; 
    border-radius: 6px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1.9px;
    text-transform: uppercase;
    padding: 13px 20px;
    margin: 0 auto;
    cursor: pointer;
    grid-area: checkoutBtn;

    &&:disabled {
        opacity: .4;
        cursor: not-allowed;
    }
`;

export const Image = styled.img `
    width: 100%;
    height: 100%;
    object-fit: cover;
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

export const InputContainer = styled.div `
    display: flex;
    align-items: center;
    padding-left: 10px;
    grid-area: inputContainer;
`;

export const Label = styled.label `
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1.7;
    letter-spacing: 1.7px;
    color: #2d2d2d;
    margin-right: 10px;
`;

export const QtyInput = styled.select `
    width: 30%;
    outline: none;
`;
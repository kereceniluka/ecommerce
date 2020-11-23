import styled from 'styled-components/macro';
import sizes from '../../utils/responsive';

export const Container = styled.div `
    width: 100%;
    background-color: #ffffff;
    padding-bottom: 75px;
`;

export const Inner = styled.div `
    width: 90%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    ${sizes.desktop} {
        width: 50%;
    }
`;

export const Title = styled.span `
    font-size: 18px;
    font-weight: 700;
    color: #2d2d2d;
    text-transform: uppercase;
    padding: 6px 0;

    ${sizes.desktop} {
        font-size: 20px;
    }
`;

export const ContentWrapper =  styled.div `
    display: flex;
    flex-direction: column;
    padding: 18px 0;

    ${sizes.desktop} {
        padding: 25px 0;
    }
`;

export const Text = styled.span `
    font-size: 14px;
    color: #2d2d2d;

    ${sizes.desktop} {
        font-size: 16px;
    }
`;

export const ContentDivider = styled.div `
    width: 100%;
    height: 1px;
    background-color: #eee;
`;

export const OrderItem = styled.div `
    width: 100%;
    height: 60px;
    display: grid;
    grid-template-columns: 30% 50% 20%;
    grid-template-areas: "image name price";
    column-gap: 5px;
    margin: 6px auto;

    ${sizes.desktop} {
        height: 80px;
        margin: 12px auto;
    } 
`;

export const Image = styled.img `
    width: 100%;
    height: 100%;
    object-fit: contain;
    grid-area: image;

    ${sizes.desktop} {
        height: 80px;
    }
`;

export const Name = styled(Text) `
    font-size: 10px;
    font-weight: 700;
    align-self: center;
    grid-area: name;

    ${sizes.desktop} {
        justify-self: flex-start;
        font-size: 15px;
    }
`;

export const Price = styled(Text) `
    font-size: 9px;
    align-self: center;
    grid-area: price;

    ${sizes.desktop} {
        font-size: 12px;
    }
`;

export const OrderInfo = styled.div `
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding: 20px 0;

    ${sizes.desktop} {
        width: 30%;
        padding: 45px 0;
    }
`;

export const PlaceOrderBtn = styled.button `
    border: none;
    outline: none;
    width: 70%;
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

    &&:disabled {
        opacity: .4;
        cursor: not-allowed;
    }

    ${sizes.desktop} {
        width: 40%;
        padding: 18px 20px;
    }
`;
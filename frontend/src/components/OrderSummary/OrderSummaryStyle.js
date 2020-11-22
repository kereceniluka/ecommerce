import styled from 'styled-components/macro';

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
`;

export const Title = styled.span `
    font-size: 18px;
    font-weight: 700;
    color: #2d2d2d;
    text-transform: uppercase;
    padding: 6px 0;
`;

export const ContentWrapper =  styled.div `
    display: flex;
    flex-direction: column;
    padding: 18px 0;
`;

export const Text = styled.span `
    font-size: 14px;
    color: #2d2d2d;
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
`;

export const Image = styled.img `
    width: 100%;
    height: 100%;
    object-fit: contain;
    grid-area: image;
`;

export const Name = styled(Text) `
    font-size: 10px;
    align-self: center;
    grid-area: name;
`;

export const Price = styled(Text) `
    font-size: 9px;
    align-self: center;
    grid-area: price;
`;

export const OrderInfo = styled.div `
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding: 20px 0;
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
`;
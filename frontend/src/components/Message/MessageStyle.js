import styled from 'styled-components/macro';

export const Container = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ variant }) => variant === 'error' ? '#fdf2f2' : variant === 'info' ? '#ebf5ff' : '#f2faf7'};
    padding: 10px 16px;
`;

export const Title = styled.h2 `
    font-size: 16px;
    font-weight: 700;
    color: #a12d2d;
`;

export const Text = styled.p `
    font-size: 14px;
    font-weight: 500;
    color: ${({ variant }) => variant === 'error' ? '#c81e1e' : variant === 'info' ? '#507ae3' : '#1c624d'};
`;
import styled from 'styled-components/macro';
import sizes from '../../utils/responsive';

export const Container = styled.section `
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px 10px;
    padding: 20px 12px 70px 12px;

    ${sizes.tablet} {
        grid-template-columns: repeat(3, 1fr);
        gap: 26px 16px;
        padding: 36px 24px 86px 24px;
    }

    ${sizes.desktop} {
        grid-template-columns: repeat(6, 1fr);
        row-gap: 10px;
        padding: 42px 80px 92px 80px;
    } 
`;
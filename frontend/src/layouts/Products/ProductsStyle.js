import styled from 'styled-components/macro';
import sizes from '../../utils/responsive';

export const Container = styled.section `
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px 10px;
    padding: 36px 12px;

    ${sizes.tablet} {
        grid-template-columns: repeat(3, 1fr);
        gap: 26px 16px;
        padding: 36px 24px;
    }

    ${sizes.desktop} {
        grid-template-columns: repeat(5, 1fr);
        gap: 38px 26px;
        padding: 42px 40px;
    } 
`;
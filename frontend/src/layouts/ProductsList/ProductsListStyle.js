import styled from 'styled-components/macro';
import sizes from '../../utils/responsive';

export const Container = styled.section `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px 0 75px 0;

    ${sizes.desktop} {
        width: 40%;
        margin: 0 auto;
    }
`;
import styled from 'styled-components/macro';
import sizes from '../../utils/responsive';
import { Search } from '@styled-icons/material-outlined/Search';

export const Container = styled.div `
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 12px;

    ${sizes.desktop} {
        width: 40%;
        height: 120px;
        margin: 0 auto;
    }
`;

export const Inner = styled.div `
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    background-color: #ffffff;
    border-radius: 6px;
    padding: 6px 10px;

    &:focus-within {
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
        transition: all .3s ease-in-out; 
    }

    ${sizes.desktop} {
        height: 55px;
    } 
`;

export const SearchIcon = styled(Search) `
    color: #996faf;

    ${sizes.desktop} {
        width: 24px;
        height: 24px;
    }
`;

export const Input = styled.input `
    outline: none;
    border: none;
    width: 100%;
    height: 45px;
    font-size: 14px;
    color: #2d2d2d;
    padding: 4px 8px;

    ${sizes.desktop} {
        height: 55px;
        font-size: 16px;
    }
`;
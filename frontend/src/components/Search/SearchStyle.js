import styled from 'styled-components/macro';
import { Close } from '@styled-icons/material-outlined/Close';

export const Container = styled.div `
    position: fixed;
    visibility: ${({ show }) => show ? 'visible' : 'hidden'};
    opacity: ${({ show }) => show ? '1' : '0'};
    top: 50px;
    left: 0;
    width: 100%;
    height: 100px;
    background-color: #eee;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    z-index: 1;
    transition: opacity .3s ease-in;
`;

export const Inner = styled.div `
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 10px 0;
`;

export const CloseIcon = styled(Close) `
    position: absolute;
    top: 6px;
    right: 10px;
    color: #2d2d2d;
`;

export const SearchForm = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 35px;
`;

export const SearchInput = styled.input `
    outline: none;
    height: 35px;
    border: 2px solid #2d2d2d;
    border-radius: 6px 0 0 6px;
    color: #2d2d2d;
    padding: 4px 8px;
`;

export const SearchBtn = styled.button `
    border: 1px solid #2d2d2d;
    outline: none;
    height: 35px;
    border-radius: 0 6px 6px 0;
    background-color: #2d2d2d;
    color: #ececef;
    padding: 4px 8px;
`;
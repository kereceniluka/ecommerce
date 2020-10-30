import styled from 'styled-components/macro';
import { ShoppingBag } from '@styled-icons/material-outlined/ShoppingBag';
import { Search } from '@styled-icons/material-outlined/Search';
import { FavoriteBorder } from '@styled-icons/material-outlined/FavoriteBorder';
import { Person } from '@styled-icons/octicons/Person';
import { Menu } from '@styled-icons/material-outlined/Menu';
import { Close } from '@styled-icons/material-outlined/Close';
import { Link } from 'react-router-dom';

export const Container = styled.header `
    position: fixed;
    top: 0;
    width: 100%;
    height: 50px;
    background-color: #2d2d2d;
    visibility: ${({ show }) => show ? 'visible' : 'hidden'};
    transition: all 0.6s ease-in-out;
    z-index: 1;  
`;

export const Inner = styled.div `
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
`;

export const Logo = styled(Link) `
    text-decoration: none;
    font-size: 22px;
    font-weight: 700;
    color: #ececef;
    text-transform: uppercase;
`;

export const NavItems = styled.nav `
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const SearchIcon = styled(Search) `
    color: #ececef;
`;

export const SearchInput = styled.input ``;

export const FavoriteIcon = styled(FavoriteBorder) `
    color: #ececef;
`;

export const CartIcon = styled(ShoppingBag) `
    color: #ececef;
`;

export const UserIcon = styled(Person) `
    color: #ececef;
    margin-left: 15px;
`;

export const MenuIcon = styled(Menu) `
    color: #ffffff;
`;

export const CloseIcon = styled(Close) `
    color: #ffffff;
`;
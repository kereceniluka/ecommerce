import styled from 'styled-components/macro';
import sizes from '../../utils/responsive';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingBag } from '@styled-icons/material-outlined/ShoppingBag';
import { Search } from '@styled-icons/material-outlined/Search';
import { FavoriteBorder } from '@styled-icons/material-outlined/FavoriteBorder';
import { Person } from '@styled-icons/octicons/Person';
import { Login } from '@styled-icons/material-rounded/Login';

export const Container = styled.header `
    width: 100%;
    height: 50px;
    background-color: #2d2d2d;

    ${sizes.desktop} {
        height: 80px;
    }
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
    -webkit-tap-highlight-color: transparent;
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

    ${sizes.tablet} {
        width: 35%;
    }
`;

export const SearchIcon = styled(Search) `
    color: #ececef;
`;

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

export const LoginIcon = styled(Login) `
    color: #ececef;
    margin-left: 15px;
`;

export const IconLink = styled(NavLink) `
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    
    &.active > *,
    &:hover > * {
        color: #996faf;
        transition: all .5s ease-out;
    }

    ${sizes.desktop} {
        display: flex;
        align-items: center;
    }
`;

export const IconLinkText = styled.span `
    display: none;
    font-size: 18px;
    font-weight: 700;
    color: #ececef;
    margin-left: 6px;
    
    ${sizes.desktop} {
        display: flex;
    }
`; 
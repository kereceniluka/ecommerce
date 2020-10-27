import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    Inner,
    Logo,
    NavItems,
    SearchIcon,
    FavoriteIcon,
    CartIcon,
    UserIcon,
    MenuIcon,
    CloseIcon,
} from './HeaderStyle';

// context
import { SearchContext } from '../../utils/context/SearchContext';

// components
import Search from '../Search/Search';

const Header = () => {

    const [search, setSearch] = useContext(SearchContext);

    const handleSearch = () => {
        setSearch(search => true);
    }

    return (
        <>
            <Container>
                <Inner>
                    <Logo to="/">Shop.</Logo>
                    <NavItems>
                        <SearchIcon size="22" onClick={handleSearch} />
                        <Link to="/favorites">
                            <FavoriteIcon size="22" />
                        </Link>
                        <Link to="/cart">
                            <CartIcon size="22" />
                        </Link>
                        <Link to="/account">
                            <UserIcon size="22" />
                        </Link>
                    </NavItems>
                </Inner>
            </Container>
            <Search />
        </>
    );
}

export default Header;
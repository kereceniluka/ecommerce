import React from 'react';
import { useSelector } from 'react-redux';
import {
    Container,
    Inner,
    Logo,
    NavItems,
    SearchIcon,
    FavoriteIcon,
    CartIcon,
    UserIcon,
    LoginIcon,
    IconLink,
    IconLinkText,
} from './HeaderStyle';

// utils
import { isEmpty } from '../../utils/helpers';

const Header = () => {

    const { userInfo } = useSelector(state => state.userLogin);

    return (
        <Container>
            <Inner>
                <Logo to="/">Shop.</Logo>
                <NavItems>
                    <IconLink to="/search">
                        <SearchIcon size="22" />
                        <IconLinkText>Search</IconLinkText>
                    </IconLink>
                    <IconLink to="/favorites">
                        <FavoriteIcon size="22" />
                        <IconLinkText>Favorites</IconLinkText>
                    </IconLink>
                    <IconLink to="/cart">
                        <CartIcon size="22" />
                        <IconLinkText>Cart</IconLinkText>
                    </IconLink>
                    {!isEmpty(userInfo) ? (
                        <IconLink to="/account">
                            <UserIcon size="22" />
                            <IconLinkText>Profile</IconLinkText>
                        </IconLink>
                    ) : (
                        <IconLink to="/login">
                            <LoginIcon size="22" />
                            <IconLinkText>Sign In</IconLinkText>
                        </IconLink>
                    )}
                </NavItems>
            </Inner>
        </Container>
    );
}

export default Header;
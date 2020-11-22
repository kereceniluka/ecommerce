import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
    Container,
    Inner,
    ProfileHeader,
    UserName,
    ProfileOptions, 
    ProfileOption,
    OptionLink,
    OrdersIcon,
    DetailsIcon,
    AddressIcon,
    LogoutIcon,
    ContentDivider,
} from './ProfileInfoStyle';

// actions
import { logout } from '../../actions/user';

const ProfileInfo = () => {

    const history = useHistory();

    const dispatch = useDispatch();
    const { name } = useSelector(state => state.userLogin.userInfo);

    const handleLogout = () => {
        dispatch(logout());
        history.push('/');
    }

    return (
        <Container>
            <Inner>
                <ProfileHeader>
                    <UserName>Hi, {name}</UserName>
                </ProfileHeader>
                <ProfileOptions>
                    <ProfileOption>
                        <OrdersIcon size="24" />
                        <OptionLink to="/orders">My orders</OptionLink>
                    </ProfileOption>
                    <ContentDivider />
                    <ProfileOption>
                        <DetailsIcon size="24" />
                        <OptionLink to="/edit-details">My details</OptionLink>
                    </ProfileOption>
                    <ContentDivider />
                    <ProfileOption>
                        <AddressIcon size="24" />
                        <OptionLink to="/edit-shipping">Addresses</OptionLink>
                    </ProfileOption>
                    <ContentDivider />
                    <ProfileOption>
                        <LogoutIcon size="24" />
                        <OptionLink to="#" onClick={handleLogout}>Sign out</OptionLink>
                    </ProfileOption>
                </ProfileOptions>
            </Inner>
        </Container>
    );
}

export default ProfileInfo;
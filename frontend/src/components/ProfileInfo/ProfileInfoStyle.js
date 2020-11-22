import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { PackageIcon } from '@styled-icons/boxicons-regular/PackageIcon';
import { Assignment } from '@styled-icons/material-outlined/Assignment';
import { HomeWork } from '@styled-icons/material-outlined/HomeWork';
import { LogOut } from '@styled-icons/boxicons-regular/LogOut';

export const Container = styled.div `
    width: 100%;
`;

export const Inner = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ProfileHeader = styled.div `
    width: 100%;
    min-height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    padding: 10px 18px;
`;

export const UserName = styled.span `
    font-size: 22px;
    font-weight: 700;
    color: #2d2d2d;
`;

export const ProfileOptions = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    margin-top: 35px;
    padding: 0 20px; 
`;

export const ProfileOption = styled.div `
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
`;

export const OptionLink = styled(Link) `
    text-decoration: none;
    color: #2d2d2d;
    margin-left: 20px;
`;

export const OrdersIcon = styled(PackageIcon) `
    color: #2d2d2d;
`;

export const DetailsIcon = styled(Assignment) `
    color: #2d2d2d;
`;

export const AddressIcon = styled(HomeWork) `
    color: #2d2d2d;
`;

export const LogoutIcon = styled(LogOut) `
    color: #2d2d2d;
`;

export const ContentDivider = styled.div `
    width: 85%;
    height: 1px;
    background-color: #eee;
    align-self: flex-end;
`;
import styled from 'styled-components/macro';
import sizes from '../../utils/responsive';
import { AssignmentInd } from '@styled-icons/material-sharp/AssignmentInd';
import { LocalShipping } from '@styled-icons/material-rounded/LocalShipping';
import { Payments } from '@styled-icons/material/Payments';
import { PackageIcon } from '@styled-icons/boxicons-solid/PackageIcon';
import { CheckCircle } from '@styled-icons/material-rounded/CheckCircle'; 
import { Link } from 'react-router-dom';

export const Container = styled.div `
    width: 100%;
    padding: 15px 0;
    background-color: #ffffff;
`;

export const Inner = styled.div `
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;

    ${sizes.desktop} {
        width: 30%;
    }
`;

export const StepIcon = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const SignInIcon = styled(AssignmentInd) `
    color: #2d2d2d;

    ${sizes.desktop} {
        width: 24px;
        height: 24px;
    }
`;

export const ShippingIcon = styled(LocalShipping) `
    color: #2d2d2d;

    ${sizes.desktop} {
        width: 24px;
        height: 24px;
    }
`;

export const PaymentIcon = styled(Payments) `
    color: #2d2d2d;

    ${sizes.desktop} {
        width: 24px;
        height: 24px;
    }
`;

export const OrderIcon = styled(PackageIcon) `
    color: #2d2d2d;

    ${sizes.desktop} {
        width: 24px;
        height: 24px;
    }
`;

export const CheckIcon = styled(CheckCircle) `
    color: #996faf;

    ${sizes.desktop} {
        width: 24px;
        height: 24px;
    }
`;

export const StepLink = styled(Link) `
    text-decoration: none;
    color: #000000;
    font-size: 10px;

    ${sizes.desktop} {
        font-size: 14px;
    }
`;

export const StepTitle = styled.span `
    font-size: 10px;
    color: #000000;

    ${sizes.desktop} {
        font-size: 14px;
    }
`;
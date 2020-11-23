import styled from 'styled-components/macro';
import sizes from '../../utils/responsive';
import { Link } from 'react-router-dom';

export const Container = styled.div `
    width: 100%;
    height: calc(100vh - 165px);
    display: flex;
    align-items: center;

    ${sizes.desktop} {
        height: calc(100vh - 130px);
    }
`;

export const Inner = styled.form `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
`;

export const InputContainer = styled.div `
    width: 90%;
    display: flex;
    flex-direction: column;
    margin: 10px 0;

    ${sizes.desktop} {
        width: 30%;
    }
`;

export const Label = styled.label `
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1.7;
    letter-spacing: 1.7px;
    color: #2d2d2d;

    ${sizes.desktop} {
        font-size: 14px;
    }
`;

export const Input = styled.input `
    width: 100%;
    height: 45px;
    outline: none;
    border: none;
    border: ${({ error }) => error && '1px solid #db2b39'};
    border-radius: 6px;
    color: #2d2d2d;
    padding: 0 8px;

    &:focus {
        border: 1px solid #996faf;
    }

    ${sizes.desktop} {
        height: 50px;
        font-size: 20px;
    }
`;

export const SubmitBtn = styled.button `
    border: none;
    outline: none;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 700;
    background-color: #996faf;
    color: #ffffff;
    text-transform: uppercase;
    margin-top: 20px;
    padding: 14px 20px;

    &&:disabled {
        opacity: .4;
        cursor: not-allowed;
    }

    ${sizes.desktop} {
        font-size: 18px;
        cursor: pointer;
    }
`;

export const NewUser = styled.span `
    font-size: 14px;
    font-weight: 500;
    color: #2d2d2d;

    ${sizes.desktop} {
        font-size: 18px;
    }
`;

export const NewUserLink = styled(Link) `
    text-decoration: none;
    font-size: 14px;
    font-weight: 700;
    color: #996faf;
    
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }

    ${sizes.desktop} {
        font-size: 18px;
    }
`;

export const ErrorMessage = styled.span `
    max-width: 100%;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: .6px;
    color: #db2b39;
    margin: 4px 0;
`;

export const SelectInput = styled.select `
    outline: none;
    width: 100%;
    height: 45px;
    padding: 6px 10px;
    color: #333333;
    background-color: #eeeeee;
    border: 1px solid #dddddd;
    border-radius: 6px;
    cursor: pointer;
`;

export const RadioInput = styled.input `
    margin: 10px 0;
`;
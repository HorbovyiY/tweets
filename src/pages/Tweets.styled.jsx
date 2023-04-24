import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const UserList = styled.ul`
    list-style: none;

    display: flex;
    flex-wrap: wrap;
    gap: 48px;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
`

export const Back = styled.button`
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-left: 20px;

    border: none;
    border-radius: 10px;
`
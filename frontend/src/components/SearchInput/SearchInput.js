import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
    Container,
    Inner,
    SearchIcon,
    Input,
} from './SearchInputStyle';

// actions
import { setTerm, listSearchedProducts } from '../../actions/search';

const SearchInput = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(setTerm(''));
            dispatch(listSearchedProducts(''));
        }
        // eslint-disable-next-line
    }, []);

    const handleSearch = term => {
        dispatch(setTerm(term));
        dispatch(listSearchedProducts(term));
    }

    return (
        <Container>
            <Inner>
                <SearchIcon size="20" />
                <Input type="text" placeholder="Search products" onChange={({ target }) => handleSearch(target.value)} />
            </Inner>
        </Container>
    );
}

export default SearchInput;
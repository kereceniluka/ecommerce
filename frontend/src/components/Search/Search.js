import React, { useContext } from 'react';
import {
    Container,
    Inner,
    CloseIcon,
    SearchForm,
    SearchInput,
    SearchBtn,
} from './SearchStyle';

// context
import { SearchContext } from '../../utils/context/SearchContext';

const Search = ({ show }) => {
    
    const [search, setSearch] = useContext(SearchContext);

    const handleSearch = () => {
        setSearch(false);
    }

    return (
        <Container show={search}>
            <Inner>
                <CloseIcon size="24" onClick={handleSearch} />
                <SearchForm>
                    <SearchInput type="text" placeholder="Type..." />
                    <SearchBtn type="submit">Search</SearchBtn>
                </SearchForm>
            </Inner>
        </Container>
    );
}

export default Search;
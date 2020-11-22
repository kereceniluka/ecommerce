import { SEARCH_SET_TERM, SEARCH_REQUEST_SUGGESTIONS } from '../constants/search';

export const setTerm = term => async (dispatch) => {
    dispatch({
        type: SEARCH_SET_TERM,
        payload: term,
    });
}

export const listSearchedProducts = term => async (dispatch, getState) => {

    let productsSuggestions = [];

    if(term) {
        productsSuggestions = getState().productList.products.filter(product => product.name.startsWith(term));
    } 

    dispatch({
        type: SEARCH_REQUEST_SUGGESTIONS,
        payload: { 
            term: term, 
            suggestions: productsSuggestions 
        },
    });

    localStorage.setItem('search', JSON.stringify(getState().search));
}
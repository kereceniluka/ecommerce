import { SEARCH_SET_TERM, SEARCH_REQUEST_SUGGESTIONS } from '../constants/search';

export const searchReducer = (state = {}, action) => {
    switch(action.type) {
        case SEARCH_SET_TERM:
            return { loading: true, term: action.payload };
        case SEARCH_REQUEST_SUGGESTIONS:
            return { loading: false, term: action.payload.term, suggestions: action.payload.suggestions };
        default:
            return state;
    }
}
import { FAVORITES_ADD_PRODUCT, FAVORITES_REMOVE_PRODUCT } from '../constants/favorites';

export const favoritesReducer = (state = { favoriteItems: [] }, action) => {
    switch(action.type) {
        case FAVORITES_ADD_PRODUCT:
            const item = action.payload;
            const existProduct = state.favoriteItems.find(i => i.product === item.product);

            if(existProduct) {
                return {
                    ...state,
                    favoriteItems: state.favoriteItems.map(i => i.product === existProduct.product ? item : i),
                };
            }
            else {
                return {
                    ...state,
                    favoriteItems: [...state.favoriteItems, item],
                };
            }
        case FAVORITES_REMOVE_PRODUCT:
            return {
                ...state,
                favoriteItems: state.favoriteItems.filter(item => item.product !== action.payload),
            };
        default:
            return state;
    }
}
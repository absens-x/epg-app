import { FETCH_CATEGORIES, SET_CATEGORIES } from './actionTypes';

export const setCategoriesAction = (payload) => ({
    type: SET_CATEGORIES,
    payload,
});

export const fetchCategoriesAction = () => ({
    type: FETCH_CATEGORIES,
});

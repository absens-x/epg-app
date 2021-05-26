import { FETCH_CATEGORIES, SET_CATEGORIES, SET_SELECTED_CATEGORY_ID } from './actionTypes';

export const setSelectedCategoryIdAction = (payload) => ({
    type: SET_SELECTED_CATEGORY_ID,
    payload,
});

export const setCategoriesAction = (payload) => ({
    type: SET_CATEGORIES,
    payload,
});

export const fetchCategoriesAction = () => ({
    type: FETCH_CATEGORIES,
});

import { SET_CATEGORIES, SET_SELECTED_CATEGORY_ID } from '../actions/actionTypes';

const defaultState = {
    categories: [],
    selectedId: null,
};

export const categoryReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return { ...state, categories: [...action.payload] };
        case SET_SELECTED_CATEGORY_ID:
            return { ...state, selectedId: action.payload };

        default:
            return state;
    }
};

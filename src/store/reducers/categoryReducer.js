import { SET_CATEGORIES } from '../actions/actionTypes';

const defaultState = {
    categories: [],
};

export const categoryReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return { ...state, categories: [...action.payload] };

        default:
            return state;
    }
};

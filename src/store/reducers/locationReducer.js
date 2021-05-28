import { SET_DOMAINS, SET_DOMAIN_NAME } from '../actions/actionTypes';

const defaultState = {
    domains: {
        perm: 'Пермь',
        ekat: 'Екатеринбург',
        barnaul: 'Барнаул',
    },

    currentDomainName: 'ekat',
};

export const locationReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_DOMAINS:
            return { state, domains: action.payload };
        case SET_DOMAIN_NAME:
            return { state, currentDomainName: action.payload };

        default:
            return state;
    }
};

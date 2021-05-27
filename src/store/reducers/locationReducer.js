import { SET_DOMAINS, SET_DOMAIN_NAME } from '../actions/actionTypes';

const defaultState = {
    domains: [
        {
            did: 1,
            domainName: 'perm',
            domainTitle: 'Пермь',
        },
        {
            did: 2,
            domainName: 'ekat',
            domainTitle: 'Екатеринбург',
        },
        {
            did: 3,
            domainName: 'barnaul',
            domainTitle: 'Барнаул',
        },
    ],
    currentDomainName: 'ekat',
};

export const locationReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_DOMAINS:
            return { state, domains: [state.domains, ...action.payload] };
        case SET_DOMAIN_NAME:
            return { state, currentDomainName: action.payload };

        default:
            return state;
    }
};

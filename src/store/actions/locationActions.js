import { SET_DOMAINS, SET_DOMAIN_NAME } from './actionTypes';

export const setDomainsAction = (payload) => ({
    type: SET_DOMAINS,
    payload,
});

export const setDomainNameAction = (payload) => ({
    type: SET_DOMAIN_NAME,
    payload,
});

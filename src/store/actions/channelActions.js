import { FETCH_CHANNELS, SET_CHANNELS } from './actionTypes';

export const setChannelsAction = (payload) => ({
    type: SET_CHANNELS,
    payload,
});

export const fetchChannelsAction = () => ({
    type: FETCH_CHANNELS,
});

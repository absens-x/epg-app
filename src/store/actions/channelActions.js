import { FETCH_CHANNELS, FETCH_CHANNEL_TVSHOWS, SET_CHANNELS } from './actionTypes';

export const setChannelsAction = (payload) => ({
    type: SET_CHANNELS,
    payload,
});

export const fetchChannelsAction = () => ({
    type: FETCH_CHANNELS,
});

export const fetchChannelTVShowsAction = (payload) => ({
    type: FETCH_CHANNEL_TVSHOWS,
    payload

});

 
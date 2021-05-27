import {
    FETCH_CHANNELS,
    FETCH_CHANNEL_INFO,
    FETCH_CHANNEL_TVSHOWS,
    SET_CHANNELS,
    SET_CHANNEL_INFO,
    SET_CHANNEL_TVSHOWS,
    SET_OPEN_CHANNEL_IDS,
} from './actionTypes';

export const setChannelsAction = (payload) => ({
    type: SET_CHANNELS,
    payload,
});

export const fetchChannelsAction = () => ({
    type: FETCH_CHANNELS,
});

export const setChannelTVShowsAction = (payload) => ({
    type: SET_CHANNEL_TVSHOWS,
    payload,
});

export const fetchChannelTVShowsAction = () => ({
    type: FETCH_CHANNEL_TVSHOWS,
});

export const setOpenChannelIDs = (payload) => ({
    type: SET_OPEN_CHANNEL_IDS,
    payload,
});

export const setChannelInfoAction = (payload) => ({
    type: SET_CHANNEL_INFO,
    payload,
});

export const fetchChannelInfoAction = () => ({
    type: FETCH_CHANNEL_INFO,
});

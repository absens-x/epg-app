import { SET_CHANNELS, SET_CHANNEL_INFO, SET_CHANNEL_TVSHOWS, SET_OPEN_CHANNEL_IDS } from '../actions/actionTypes';

const defaultState = {
    channels: [],
    channelInfo: null,
    tvshows: null,
    channelIDs: {
        xvid: null,
        chid: null,
    },
};

export const channelReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_CHANNELS:
            return { ...state, channels: [...action.payload] };

        case SET_CHANNEL_INFO:
            return { ...state, channelInfo: action.payload };

        case SET_OPEN_CHANNEL_IDS:
            return { ...state, channelIDs: action.payload };

        case SET_CHANNEL_TVSHOWS:
            return { ...state, tvshows: action.payload };

        default:
            return state;
    }
};

import { SET_CHANNELS, SET_CHANNEL_INFO, SET_CHANNEL_TVSHOWS } from '../actions/actionTypes';

const defaultState = {
    channels: [],
    channelInfo: {},
    tvshows: [],
};

export const channelReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_CHANNELS:
            return { ...state, channels: [...action.payload] };

        case SET_CHANNEL_INFO:
            return { ...state, channelInfo: action.payload };

        case SET_CHANNEL_TVSHOWS:
            return { ...state, tvshows: [...action.payload] };

        default:
            return state;
    }
};

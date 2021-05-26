import { SET_CHANNELS } from '../actions/actionTypes';

const defaultState = {
    channels: [],
};

export const channelReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_CHANNELS:
            return { ...state, channels: [...action.payload] };

        default:
            return state;
    }
};

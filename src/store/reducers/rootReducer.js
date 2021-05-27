import { combineReducers } from 'redux';
import { categoryReducer } from './categoryReducer';
import { channelReducer } from './channelReducer';
import { locationReducer } from './locationReducer';

export const rootReducer = combineReducers({
    category: categoryReducer,
    channel: channelReducer,
    location: locationReducer,
});

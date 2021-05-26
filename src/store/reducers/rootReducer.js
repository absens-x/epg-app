import { combineReducers } from 'redux';
import { categoryReducer } from './categoryReducer';
import { channelReducer } from './channelReducer';

export const rootReducer = combineReducers({
    category: categoryReducer,
    channel: channelReducer,
});

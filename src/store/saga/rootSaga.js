import { all } from 'redux-saga/effects';
import { categoryWatcher } from './categorySaga';
import { channelWatcher } from './channelSaga';

export function* rootSaga() {
    yield all([categoryWatcher(), channelWatcher()]);
}

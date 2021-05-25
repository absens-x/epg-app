import { all } from 'redux-saga/effects';
import { categoryWatcher } from './categorySaga';

export function* rootSaga() {
    yield all([categoryWatcher()]);
}

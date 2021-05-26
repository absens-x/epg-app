import { call, put, takeEvery, takeLatest } from '@redux-saga/core/effects';
import EPGServerAPI from '../../services/EPGServerAPI';
import { FETCH_CATEGORIES } from '../actions/actionTypes';
import { setCategoriesAction } from '../actions/categoryActions';

const epgApi = new EPGServerAPI();

function* categoryWorker() {
    const data = yield call(epgApi.getAllCategories);
    yield put(setCategoriesAction(data));
}

export function* categoryWatcher() {
    yield takeEvery(FETCH_CATEGORIES, categoryWorker);
}

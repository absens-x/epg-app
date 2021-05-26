import { call, put, takeEvery, takeLatest } from '@redux-saga/core/effects';
import EPGServerAPI from '../../services/EPGServerAPI';
import { FETCH_CHANNELS } from '../actions/actionTypes';
import { setChannelsAction } from '../actions/channelActions';

const epgApi = new EPGServerAPI();

function* channelWorker() {
    const data = yield call(epgApi.getAllChannels);
    yield put(setChannelsAction(data));
}

export function* channelWatcher() {
    yield takeEvery(FETCH_CHANNELS, channelWorker);
}

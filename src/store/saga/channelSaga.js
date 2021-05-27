import { call, put, select, takeEvery } from '@redux-saga/core/effects';
import EPGServerAPI from '../../services/EPGServerAPI';
import { FETCH_CHANNELS, FETCH_CHANNEL_TVSHOWS } from '../actions/actionTypes';
import { setChannelsAction } from '../actions/channelActions';

const epgApi =  new EPGServerAPI();

function* channelWorker() {
    const currentDomainName = yield select((state) => state.location.currentDomainName)
    yield epgApi.setDomainName(currentDomainName)
    const data = yield call(epgApi.getAllChannels);
    yield put(setChannelsAction(data));
}

function* channelTVShowsWorker() {
    const currentDomainName = yield select((state) => state.location.currentDomainName)
    yield epgApi.setDomainName(currentDomainName)
    const data = yield call(epgApi.getChannelTVShows);
    yield put(setChannelsAction(data));
}

export function* channelWatcher() {
    yield takeEvery(FETCH_CHANNELS, channelWorker);
    yield takeEvery(FETCH_CHANNEL_TVSHOWS, channelTVShowsWorker);
}

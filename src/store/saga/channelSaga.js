import { call, put, select, take, takeEvery } from '@redux-saga/core/effects';
import EPGServerAPI from '../../services/EPGServerAPI';
import { FETCH_CHANNELS, FETCH_CHANNEL_INFO, FETCH_CHANNEL_TVSHOWS } from '../actions/actionTypes';
import { setChannelInfoAction, setChannelsAction, setChannelTVShowsAction } from '../actions/channelActions';

const epgApi = new EPGServerAPI();

function* channelWorker() {
    const currentDomainName = yield select((state) => state.location.currentDomainName);

    yield epgApi.setDomainName(currentDomainName);
    const data = yield call(epgApi.getAllChannels);
    yield put(setChannelsAction(data));
}

function* channelTVShowsWorker() {
    const currentDomainName = yield select((state) => state.location.currentDomainName);
    const channelIDs = yield select((state) => state.channel.channelIDs);
    yield epgApi.setDomainName(currentDomainName);
    const data = yield call(epgApi.getChannelTVShowsById, channelIDs.xvid);
    yield put(setChannelTVShowsAction(data));
}

function* channelInfoWorker() {
    const currentDomainName = yield select((state) => state.location.currentDomainName);
    const channelIDs = yield select((state) => state.channel.channelIDs);
    yield epgApi.setDomainName(currentDomainName);
    const data = yield call(epgApi.getChannelInfoById, channelIDs.chid);
    yield put(setChannelInfoAction(data));
}

export function* channelWatcher() {
    yield takeEvery(FETCH_CHANNELS, channelWorker);
    yield takeEvery(FETCH_CHANNEL_TVSHOWS, channelTVShowsWorker);
    yield takeEvery(FETCH_CHANNEL_INFO, channelInfoWorker);
}

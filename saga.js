// my saga
import { call, takeLatest, put } from 'redux-saga/effects';
import { request } from './request';
import { transformTheData } from './mappers';
import * as actions from './actions';

function* fetchAllTheThings() {
	try {
		const response = yield call(request, '/fetchThings', 'GET');
		if (response.status < 400) {
			const transformedData = yield call(transformTheData, response.data);
			yield put(actions.storeAllTheThings(transformedData));
		} else {
			yield put(actions.handleError());
		}
	}
}

function* watchFetchAllTheThings() {
	yield takeLatest(FETCH_ALL_THE_THINGS, fetchAllTheThings);
}

export { watchFetchAllTheThings, fetchAllTheThings };
// saga test
import { call, takeLatest, put } from 'redux-saga/effects';
import { request } from './request';
import { transformTheData } from './mappers';
import * as actions form './actions';

describe('fetchAllTheThings sagas', () => {
	describe(watchFetchAllTheThings, () => {

		it('calls takelatest on FETCH_ALL_THE_THINGS action', () => {
			const generator = watchFetchAllTheThings();
			let next = generator.next();
			expect(next.value).toEqual(takeLatest(FETCH_ALL_THE_THINGS, fetchAllTheThings));
			next = generator.next();
			expect(next).toEqual({ done: true, value: undefined });
		});

	});

	describe('fetchAllTheThings', () => {
		let generator;
		let next;
		
		beforeEach(() => {
			generator = fetchAllTheThings();
			next = generator.next();
			expect(next.value).toEqual(call(request, '/fetchThings', 'GET'));
		});

		it('handles successful api calls', () => {
			const response = {
				status: 200,
				data: { we: 'win!' },
			};
			const transformedData = { showTrophy: true };

			next = generator.next(response);
			expect(next).toEqual(call(transformTheData, response.data));
			next = generator.next(transformedData);
			expect(next).toEqual(put(actions.storeAllTheThings(transformedData)));
			next = generator.next();
			expect(next).toEqual({ done: true, value: undefined });
		});

		it('handles unsuccessful api calls', () => {
			const response = {
				status: 403,
			};

			next = generator.next(response);
			expect(next).toEqual(put(actions.handleError()));
			next = generator.next();
			expect(next).toEqual({ done: true, value: undefined });
		})
	});
}
/*
 * @Author: 廉恒凯
 * @Date: 2020-04-19 14:57:57
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2020-05-06 13:20:57
 * @Description: file content
 */
import mockAxios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { fromJS } from 'immutable';
import {
    FETCH_COUNTERLIST_LOADING,
    FETCH_COUNTERLIST_FAILURE,
    FETCH_COUNTERLIST_SUCCESS,
    INCREMENT,
    DECREMENT,
} from '../actionTypes';

import * as actions from '../actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('counterPanel actions', () => {
    it('should create an action to increment', () => {
        const caption = 'first';
        const expectedAction = {
            type: INCREMENT,
            caption,
        };
        expect(actions.increment(caption)).toEqual(expectedAction);
    });

    it('should create an action to decrement', () => {
        const caption = 'first';
        const expectedAction = {
            type: DECREMENT,
            caption,
        };
        expect(actions.decrement(caption)).toEqual(expectedAction);
    });

    it('should call couterList API and loading, success action ', () => {
        mockAxios.get.mockImplementationOnce(() => Promise.resolve({ data: [] }));
        const store = mockStore(fromJS({ counterPanel: { counterList: [] } }));
        store.dispatch(actions.getCounterList());
        const expectedAction = [
            { type: FETCH_COUNTERLIST_LOADING },
            {
                type: FETCH_COUNTERLIST_SUCCESS,
                counterList: [],
            },
        ];
        return new Promise(resolve => {
            setTimeout(resolve, 0);
        }).then(() => {
            const returnedActions = store.getActions();
            expect(returnedActions).toEqual(expectedAction);
            expect(mockAxios.get).toBeCalledWith('/counter/getCounterList');
        });
    });

    it('should call couterList API and loading, failure action ', () => {
        mockAxios.get.mockImplementationOnce(() => Promise.reject(new Error('fetch data error')));
        const store = mockStore(fromJS({}));
        store.dispatch(actions.getCounterList());
        const expectedAction = [
            { type: FETCH_COUNTERLIST_LOADING },
            {
                type: FETCH_COUNTERLIST_FAILURE,
                errorMessages: 'fetch data error',
            },
        ];
        return new Promise(resolve => {
            setTimeout(resolve, 0);
        }).then(() => {
            const returnedActions = store.getActions();
            expect(returnedActions).toEqual(expectedAction);
            expect(mockAxios.get).toBeCalledWith('/counter/getCounterList');
        });
    });
});

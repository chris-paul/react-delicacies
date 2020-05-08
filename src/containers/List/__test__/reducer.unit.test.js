/*
 * @Author: 廉恒凯
 * @Date: 2020-04-19 19:20:31
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2020-05-08 22:05:33
 * @Description: file content
 */
import { fromJS } from 'immutable';
import reducer from '../reducer';
import {
    FETCH_COUNTERLIST_LOADING,
    FETCH_COUNTERLIST_FAILURE,
    FETCH_COUNTERLIST_SUCCESS,
    INCREMENT,
    DECREMENT,
} from '../actionTypes';

describe('counter reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {}).toJS()).toEqual({ counterList: [] });
    });

    it('should handle INCREMENT', () => {
        const state = fromJS({
            counterList: [{ value: 1, caption: 'first' }],
        });
        expect(reducer(state, { type: INCREMENT, caption: 'first' }).toJS()).toEqual({
            counterList: [
                {
                    value: 2,
                    caption: 'first',
                },
            ],
        });
    });

    it('should not handle INCREMENT when caption not match', () => {
        const state = fromJS({
            counterList: [{ value: 1, caption: 'first' }],
        });
        expect(reducer(state, { type: INCREMENT, caption: 'second' }).toJS()).toEqual({
            counterList: [
                {
                    value: 1,
                    caption: 'first',
                },
            ],
        });
    });

    it('should handle DECREMENT', () => {
        const state = fromJS({
            counterList: [{ value: 1, caption: 'first' }],
        });
        expect(reducer(state, { type: DECREMENT, caption: 'first' }).toJS()).toEqual({
            counterList: [
                {
                    value: 0,
                    caption: 'first',
                },
            ],
        });
    });

    it('should not handle DECREMENT when caption not match', () => {
        const state = fromJS({
            counterList: [{ value: 1, caption: 'first' }],
        });
        expect(reducer(state, { type: DECREMENT, caption: 'second' }).toJS()).toEqual({
            counterList: [
                {
                    value: 1,
                    caption: 'first',
                },
            ],
        });
    });

    it('should handle FETCH_COUNTERLIST_LOADING', () => {
        const state = fromJS({});
        expect(reducer(state, { type: FETCH_COUNTERLIST_LOADING }).toJS()).toEqual({
            isFetching: true,
        });
    });

    it('should handle FETCH_COUNTERLIST_FAILURE', () => {
        const state = fromJS({});
        const errorMessages = 'fetch error!';
        expect(reducer(state, { type: FETCH_COUNTERLIST_FAILURE, errorMessages }).toJS()).toEqual({
            isFetching: false,
            errorMessages,
        });
    });

    it('should handle FETCH_COUNTERLIST_SUCCESS', () => {
        const counterList = [{ value: 1, caption: 'first' }];
        const state = fromJS({});
        expect(reducer(state, { type: FETCH_COUNTERLIST_SUCCESS, counterList }).toJS()).toEqual({
            counterList,
            isFetching: false,
        });
    });
});

/*
 * @Author: 廉恒凯
 * @Date: 2020-04-19 19:20:31
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2020-04-19 20:06:38
 * @Description: file content
 */
import { fromJS } from 'immutable';
import reducer from './counterPanel';
import { INCREMENT, DECREMENT } from '../constants';

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
});

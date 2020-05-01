/*
 * @Author: 廉恒凯
 * @Date: 2020-04-19 14:57:57
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2020-05-01 22:12:30
 * @Description: file content
 */
import * as actions from '../actions';
import { INCREMENT, DECREMENT } from '../actionTypes';

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
        expect(actions.increment(caption)).toEqual(expectedAction);
    });
});

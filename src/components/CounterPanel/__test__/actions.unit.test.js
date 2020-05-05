/*
 * @Author: 廉恒凯
 * @Date: 2020-04-19 14:57:57
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2020-05-05 11:28:59
 * @Description: file content
 */
import mockAxios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { fromJS } from 'immutable';
import { INCREMENT, DECREMENT, INIT_COUNTERLIST } from '../actionTypes';
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

    it('should create an action to decrement1', () => {
        mockAxios.get.mockImplementationOnce(() => Promise.resolve({ data: [] }));
        const store = mockStore(fromJS({ counterPanel: { counterList: [] } }));
        store.dispatch(actions.getCounterList());
        const expectedAction = [
            {
                type: INIT_COUNTERLIST,
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
});

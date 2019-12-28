/*
 * @Author: your name
 * @Date: 2019-12-28 10:40:11
 * @LastEditTime : 2019-12-28 10:48:25
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-delicacies\src\components\TestCom\reducer.js
 */
import { fromJS } from 'immutable';
import { createReducer } from 'redux-immutablejs';
import { ADD } from './actions';

const initialState = fromJS({
    num: 0,
});

export default createReducer(initialState, {
    [ADD]: (state) => {
        const num = state.get('num');
        return state.set({
            num: num + 1,
        });
    },
});

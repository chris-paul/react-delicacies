/*
 * @Author: your name
 * @Date: 2019-12-28 10:18:39
 * @LastEditTime: 2020-05-05 11:15:59
 * @LastEditors: 廉恒凯
 * @Description: In User Settings Edit
 * @FilePath: \react-delicacies\src\reducers\rootReducers.js
 */
/*  项目根目录reducer */
import { fromJS } from 'immutable';
import { createReducer } from 'redux-immutablejs';
import { INCREMENT, DECREMENT, INIT_COUNTERLIST } from './actionTypes';

const initialState = fromJS({
    counterList: [],
});

export default createReducer(initialState, {
    [INCREMENT]: (state, { caption }) => {
        return state.update('counterList', listItem => {
            return listItem.map(row => {
                if (row.get('caption') === caption) {
                    return row.set('value', row.get('value') + 1);
                }
                return row;
            });
        });
    },
    [DECREMENT]: (state, { caption }) => {
        return state.update('counterList', listItem => {
            return listItem.map(row => {
                if (row.get('caption') === caption) {
                    return row.set('value', row.get('value') - 1);
                }
                return row;
            });
        });
    },
    [INIT_COUNTERLIST]: (state, { counterList }) => {
        return state.set('counterList', fromJS(counterList));
    },
});
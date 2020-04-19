/*
 * @Author: your name
 * @Date: 2019-12-28 10:18:39
 * @LastEditTime: 2020-04-19 20:07:45
 * @LastEditors: 廉恒凯
 * @Description: In User Settings Edit
 * @FilePath: \react-delicacies\src\reducers\rootReducers.js
 */
/*  项目根目录reducer */
import { fromJS } from 'immutable';
import { createReducer } from 'redux-immutablejs';
import { INCREMENT, DECREMENT } from '../constants';

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
});

/*
 * @Author: your name
 * @Date: 2019-12-28 10:18:39
 * @LastEditTime: 2020-05-08 22:37:12
 * @LastEditors: 廉恒凯
 * @Description: In User Settings Edit
 * @FilePath: \react-delicacies\src\reducers\rootReducers.js
 */
/*  项目根目录reducer */
import { fromJS } from 'immutable';
import { createReducer } from 'redux-immutablejs';
import {
    FETCH_COUNTERLIST_LOADING,
    FETCH_COUNTERLIST_FAILURE,
    FETCH_COUNTERLIST_SUCCESS,
    INCREMENT,
    DECREMENT,
} from './actionTypes';

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
    [FETCH_COUNTERLIST_LOADING]: state => {
        return state.set('isFetching', true);
    },
    [FETCH_COUNTERLIST_FAILURE]: (state, { errorMessages }) => {
        return state.set('isFetching', false).set('errorMessages', errorMessages);
    },
    [FETCH_COUNTERLIST_SUCCESS]: (state, { counterList }) => {
        console.info(counterList);
        return state.set('isFetching', false).set('counterList', fromJS(counterList));
    },
});

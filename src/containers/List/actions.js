/*
 * @Author: 廉恒凯
 * @Date: 2020-04-19 14:55:12
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2020-09-13 16:53:54
 * @Description: file content
 */
import {
    FETCH_COUNTERLIST_LOADING,
    FETCH_COUNTERLIST_FAILURE,
    FETCH_COUNTERLIST_SUCCESS,
    INCREMENT,
    DECREMENT,
} from './actionTypes';
import getInitList from '../../server';

export const increment = caption => ({
    type: INCREMENT,
    caption,
});

export const decrement = caption => ({
    type: DECREMENT,
    caption,
});

export const getCounterList = () => {
    return dispatch => {
        dispatch({
            type: FETCH_COUNTERLIST_LOADING,
        });
        getInitList()
            .then(res => {
                dispatch({
                    type: FETCH_COUNTERLIST_SUCCESS,
                    counterList: res.data,
                });
            })
            .catch(error => {
                dispatch({
                    type: FETCH_COUNTERLIST_FAILURE,
                    errorMessages: error.message || error,
                });
            });
    };
};

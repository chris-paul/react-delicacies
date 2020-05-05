/*
 * @Author: 廉恒凯
 * @Date: 2020-04-19 14:55:12
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2020-05-05 11:11:45
 * @Description: file content
 */
import { INCREMENT, DECREMENT, INIT_COUNTERLIST } from './actionTypes';
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
    return dispath => {
        getInitList().then(res => {
            dispath({
                type: INIT_COUNTERLIST,
                counterList: res.data,
            });
        });
    };
};

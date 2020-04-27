/*
 * @Author: 廉恒凯
 * @Date: 2020-04-19 14:55:12
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2020-04-27 21:15:56
 * @Description: file content
 */
import { INCREMENT, DECREMENT } from './actionTypes';

export const increment = caption => ({
    type: INCREMENT,
    caption,
});

export const decrement = caption => ({
    type: DECREMENT,
    caption,
});

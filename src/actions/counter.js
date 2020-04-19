/*
 * @Author: 廉恒凯
 * @Date: 2020-04-19 14:55:12
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2020-04-19 15:08:15
 * @Description: file content
 */
import { INCREMENT, DECREMENT } from '../constants';

export const increment = caption => ({
    type: INCREMENT,
    caption,
});

export const decrement = caption => ({
    type: DECREMENT,
    caption,
});

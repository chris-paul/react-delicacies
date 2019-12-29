/*
 * @Author: your name
 * @Date: 2019-12-28 10:18:39
 * @LastEditTime : 2019-12-28 10:52:29
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-delicacies\src\reducers\rootReducers.js
 */
/*  项目根目录reducer */
import { combineReducers } from 'redux-immutablejs';
import * as reducers from '@components/index';

const rootReducers = combineReducers({ ...reducers });
export default rootReducers;

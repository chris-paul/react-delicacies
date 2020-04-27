/*
 * @Author: 廉恒凯
 * @Date: 2020-04-27 21:39:23
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2020-04-27 21:40:32
 * @Description: file content
 */
import { combineReducers } from 'redux-immutablejs';
import counterPanel from '@components/CounterPanel/reducer';

const rootReducers = combineReducers({ counterPanel });
export default rootReducers;

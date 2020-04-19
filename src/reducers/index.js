/*
 * @Author: 廉恒凯
 * @Date: 2020-04-19 15:24:35
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2020-04-19 20:07:00
 * @Description: file content
 */
import { combineReducers } from 'redux-immutablejs';
import counterPanel from './counterPanel';

const rootReducers = combineReducers({ counterPanel });
export default rootReducers;

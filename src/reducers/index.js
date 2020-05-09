/*
 * @Author: 廉恒凯
 * @Date: 2020-04-27 21:39:23
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2020-05-05 20:16:47
 * @Description: file content
 */
import { combineReducers } from 'redux-immutablejs';
// import counterPanel from '@components/CounterPanel/reducer';
import list from '../containers/List/reducer';

const rootReducers = combineReducers({ list });
export default rootReducers;

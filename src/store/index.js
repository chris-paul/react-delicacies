/*
 * @Author: your name
 * @Date: 2019-12-28 10:02:28
 * @LastEditTime : 2019-12-28 10:18:29
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-delicacies\src\store\index.js
 */

import { createStore, applyMiddleware, compose } from 'redux';
import Immutable from 'immutable';
import thunk from 'redux-thunk';
import rootReducers from '../reducers/rootReducers';

const getStore = () => {
    const state = Immutable.fromJS({});
    const devMode = process.env.NODE_ENV !== 'production';
    if (devMode) {
        // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 })) || compose;
        return createStore(rootReducers, rootReducers(state), composeEnhancers(
            applyMiddleware(thunk),
        ));
    }
    return createStore(
        rootReducers,
        rootReducers(state),
        applyMiddleware(thunk),
    );
};

const store = getStore();

export default store;

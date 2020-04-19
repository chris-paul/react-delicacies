/*
 * @Author: your name
 * @Date: 2019-12-28 10:36:51
 * @LastEditTime: 2020-04-19 16:49:08
 * @LastEditors: 廉恒凯
 * @Description: In User Settings Edit
 * @FilePath: \react-delicacies\src\components\Hoc\toJSHOC.js
 */

import React from 'react';
import { Iterable } from 'immutable';

/**
 * 高阶组件 将组件的immutable对象转换为JS对象
 * auther 廉恒凯
 * @param {*} 传入React组件
 * 获取可枚举属性为数组,每一个数组都是第一个参数是WrappedComponent的props的key
 * 第二个值是WrappedComponent的props的value
 *
 */
const toJs = WrappedComponent => wrappedComponentProps => {
    const KEY = 0;
    const VALUE = 1;
    const propsJS = Object.entries(wrappedComponentProps).reduce((props, wrappedComponentProp) => {
        return {
            ...props,
            [wrappedComponentProp[KEY]]: Iterable.isIterable(wrappedComponentProp[VALUE])
                ? wrappedComponentProp[VALUE].toJS()
                : wrappedComponentProp[VALUE],
        };
    }, {});
    return <WrappedComponent {...propsJS} />;
};

export default toJs;

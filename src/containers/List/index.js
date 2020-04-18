/*
 * @Author: 廉恒凯
 * @Date: 2019-12-28 10:16:47
 * @LastEditTime: 2020-04-18 16:54:16
 * @LastEditors: 廉恒凯
 * @Description: In User Settings Edit
 * @FilePath: \react-delicacies\src\pages\Login\index.js
 */
import React from 'react';
import Counter from '@components/Counter';

const List = () => (
    <div data-test="list">
        <h1>Counter List</h1>
        <Counter data-test="listCounter" />
    </div>
);

export default List;

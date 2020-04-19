/*
 * @Author: 廉恒凯
 * @Date: 2019-12-28 10:16:47
 * @LastEditTime: 2020-04-19 20:55:33
 * @LastEditors: 廉恒凯
 * @Description: In User Settings Edit
 * @FilePath: \react-delicacies\src\pages\Login\index.js
 */
import React from 'react';
import CounterPanel from '@components/CounterPanel';
import Summary from '@components/Summary';
import styles from './index.less';

const List = () => (
    <div className={styles.counterListWrap}>
        <CounterPanel />
        <Summary />
    </div>
);

export default List;

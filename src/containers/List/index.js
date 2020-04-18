/*
 * @Author: 廉恒凯
 * @Date: 2019-12-28 10:16:47
 * @LastEditTime: 2020-04-18 22:02:25
 * @LastEditors: 廉恒凯
 * @Description: In User Settings Edit
 * @FilePath: \react-delicacies\src\pages\Login\index.js
 */
import React, { Component } from 'react';
import Counter from '@components/Counter';
import styles from './index.less';

class List extends Component {
    constructor() {
        super();
        this.state = {
            counterList: [],
        };
    }

    render() {
        const { counterList } = this.state;
        return (
            <div data-test="list">
                <h3 className={styles.listTitle}>Counter List</h3>
                <h1>1</h1>
                {counterList.map(item => (
                    <Counter key={item.id} value={item.value} data-test="listCounter" />
                ))}
            </div>
        );
    }
}

export default List;

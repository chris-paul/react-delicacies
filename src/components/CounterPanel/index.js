/*
 * @Author: 廉恒凯
 * @Date: 2020-04-19 13:22:38
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2020-04-19 13:47:01
 * @Description: file content
 */
import React, { Component } from 'react';
import Counter from '@components/Counter';
import styles from './index.less';

class CounterPanel extends Component {
    constructor() {
        super();
        this.state = {
            counterList: [],
        };
    }

    render() {
        const { counterList } = this.state;
        return (
            <div>
                <h3 className={styles.listTitle}>Counter List</h3>
                {counterList.map(item => (
                    <Counter key={item.id} value={item.value} data-test="counterItem" />
                ))}
            </div>
        );
    }
}

export default CounterPanel;

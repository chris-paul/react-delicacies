/*
 * @Author: 廉恒凯
 * @Date: 2020-04-18 15:40:38
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2020-04-18 22:11:37
 * @Description: file content
 */
import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import styles from './index.less';

const Counter = ({ value }) => (
    <div className={styles.counterWrap}>
        <span className={styles.valueText}>Counter: {value}</span>
        <Button className={styles.addButton} type="primary">
            +
        </Button>
        <Button type="default">-</Button>
    </div>
);

Counter.defaultProps = {
    value: 0,
};

Counter.propTypes = {
    value: PropTypes.number,
};

export default Counter;

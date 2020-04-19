/*
 * @Author: 廉恒凯
 * @Date: 2020-04-18 15:40:38
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2020-04-19 22:23:34
 * @Description: file content
 */
import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import styles from './index.less';

const Counter = ({ value, caption, increment, decrement }) => (
    <div className={styles.counterWrap}>
        <span data-test="counterValue" className={styles.valueText}>
            Counter: {value}
        </span>
        <Button
            onClick={() => {
                increment(caption);
            }}
            data-test="addButton"
            className={styles.addButton}
            type="primary"
        >
            +
        </Button>
        <Button data-test="decButton" type="default" onClick={() => decrement(caption)}>
            -
        </Button>
    </div>
);

Counter.defaultProps = {
    value: 0,
    caption: '0',
    decrement: () => {},
    increment: () => {},
};

Counter.propTypes = {
    value: PropTypes.number,
    caption: PropTypes.string,
    decrement: PropTypes.func,
    increment: PropTypes.func,
};

export default Counter;

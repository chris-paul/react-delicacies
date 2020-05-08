/*
 * @Author: 廉恒凯
 * @Date: 2020-05-05 16:50:04
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2020-05-05 16:57:48
 * @Description: file content
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const FetchError = ({ message, onRetry }) => (
    <div>
        <p> could not fetch counter list {message} </p>
        <Button onClick={onRetry}>Retry</Button>
    </div>
);

FetchError.defaultProps = {
    message: null,
    onRetry: () => {},
};

FetchError.propTypes = {
    message: PropTypes.string,
    onRetry: PropTypes.func,
};

export default FetchError;

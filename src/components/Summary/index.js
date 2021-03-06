/*
 * @Author: 廉恒凯
 * @Date: 2020-04-19 13:22:38
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2020-05-08 22:41:57
 * @Description: file content
 */
import React from 'react';
import { connect } from 'react-redux';
import toJS from '@components/Hoc/toJSHOC';
import PropTypes from 'prop-types';
import { isEmpty } from '../../utils/tools';

export function Summary({ value }) {
    return (
        !isEmpty(value) && (
            <div style={{ fontWeight: 'bold', fontSize: '16px' }}>Total Count: {value}</div>
        )
    );
}

Summary.propTypes = {
    // eslint-disable-next-line react/require-default-props
    value: PropTypes.number,
};

function mapStateToProps(state) {
    let sum = 0;
    const counterList = state.getIn(['list', 'counterList'], []);
    counterList.map(row => {
        const value = row.get('value');
        sum += value * 1;
        return row;
    });
    return { value: sum };
}

export default connect(mapStateToProps, null)(toJS(Summary));

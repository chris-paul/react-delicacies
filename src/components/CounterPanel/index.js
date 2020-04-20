/*
 * @Author: 廉恒凯
 * @Date: 2020-04-19 13:22:38
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2020-04-20 12:53:50
 * @Description: file content
 */
import React, { PureComponent } from 'react';
import Counter from '@components/Counter';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import toJS from '@components/Hoc/toJSHOC';
import * as actions from '../../actions';

import styles from './index.less';

export class CounterPanel extends PureComponent {
    render() {
        const { counterList, increment, decrement } = this.props;
        return (
            <div>
                <h1 className={styles.listTitle}>Counter List</h1>
                {counterList.map(item => (
                    <Counter
                        increment={increment}
                        decrement={decrement}
                        key={item.caption}
                        caption={item.caption}
                        value={item.value}
                        data-test="counterItem"
                    />
                ))}
            </div>
        );
    }
}

CounterPanel.defaultProps = {
    counterList: [],
    decrement: () => {},
    increment: () => {},
};

CounterPanel.propTypes = {
    counterList: PropTypes.arrayOf(
        PropTypes.shape({
            caption: PropTypes.string,
            value: PropTypes.number,
        }),
    ),
    decrement: PropTypes.func,
    increment: PropTypes.func,
};

export default connect(
    state => {
        return { counterList: state.getIn(['counterPanel', 'counterList']) };
    },
    dispatch => ({ ...bindActionCreators(actions, dispatch) }),
)(toJS(CounterPanel));

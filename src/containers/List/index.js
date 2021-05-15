/*
 * @Author: 廉恒凯
 * @Date: 2019-12-28 10:16:47
 * @LastEditTime: 2021-05-15 12:42:11
 * @LastEditors: 廉恒凯
 * @Description: In User Settings Edit
 * @FilePath: \react-delicacies\src\pages\Login\index.js
 */
import React, { PureComponent } from 'react';
import CounterPanel from '@components/CounterPanel';
import Summary from '@components/Summary';
import FetchError from '@components/FetchError';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import toJS from '@components/Hoc/toJSHOC';
import * as actions from './actions';
import styles from './index.less';

export class List extends PureComponent {
    componentDidMount() {
        const { getCounterList } = this.props;
        getCounterList();
    }

    render() {
        const { isFetching, errorMessages, getCounterList } = this.props;
        if (isFetching) {
            return <p>Loading...</p>;
        }

        if (errorMessages) {
            return (
                <FetchError
                    message={errorMessages}
                    onRetry={() => {
                        getCounterList();
                    }}
                />
            );
        }

        return (
            <div className={styles.counterListWrap}>
                <CounterPanel />
                <Summary />
            </div>
        );
    }
}

List.defaultProps = {
    isFetching: false,
    errorMessages: null,
    getCounterList: () => {},
};

List.propTypes = {
    isFetching: PropTypes.bool,
    errorMessages: PropTypes.string,
    getCounterList: PropTypes.func,
};

export default connect(
    state => {
        return {
            isFetching: state.getIn(['list', 'isFetching']),
            errorMessages: state.getIn(['list', 'errorMessages']),
        };
    },
    dispatch => ({ ...bindActionCreators(actions, dispatch) }),
)(toJS(List));

/*
 * @Author: your name
 * @Date: 2019-12-28 10:37:53
 * @LastEditTime : 2019-12-31 18:25:01
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-delicacies\src\components\TestCom\index.js
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'antd';
import toJS from '@components/Hoc/toJSHOC';
import { PropTypes } from 'prop-types';
import * as actions from './actions';

/**
 * DjPage是录单界面,这里不应该控制是否显示,暂时还没想到好的方案,如有时间再继续改进
 * 分别是 按钮组件 明细组件 主录单组件
 */
@connect(
    (state) => (
        { testCom: state.getIn(['num']) }
    ),
    (dispatch) => ({
        testActions: bindActionCreators(actions, dispatch),
    })
)
@toJS

class TestCom extends Component {
    onClick = () => {
        const { testActions } = this.props;
        testActions.add();
    }

    render() {
        const { num } = this.props;
        return (
            <div>
                <span>{num}</span>
                <Button onClick={this.onClick}>+</Button>
            </div>
        );
    }
}

TestCom.propTypes = {
    num: PropTypes.number.isRequired,
    testActions: PropTypes.shape({
        add: PropTypes.func.isRequired,
    }),
};

TestCom.defaultProps = {
    testActions: {}
}
export default TestCom;

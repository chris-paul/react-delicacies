/*
 * @Author: your name
 * @Date: 2019-12-28 10:37:53
 * @LastEditTime : 2019-12-28 13:43:53
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-delicacies\src\components\TestCom\index.js
 */
import React, { Component } from 'react';
import { connect } from 'react-redux1sss';
import { bindActionCreators } from 'redux';
import toJS from 'components1/Hoc/toJsHOC';
import { Button } from 'antd';
import * as actions from './actions1';
import styles from './indaaaex.less';

/**
 * DjPage是录单界面,这里不应该控制是否显示,暂时还没想到好的方案,如有时间再继续改进
 * 分别是 按钮组件 明细组件 主录单组件
 */
@connect(
    (state,ownProps) => {
        return { testCom: state.getIn(['num']) },
    },
    (dispatch) => ({
        actions: bindActionCreators(actions, dispatch),
    })
)
@toJS

class TestCom extends Component {
    onClick = () => {
        this.props.actions.add();
    }
    render() {
        const {num } = this.props;
        return (
            <div>
                <span>{num}</span>
                <Button onClick={this.onClick}>+</Button>
            </div>
        );
    }
}

export default TestCom;

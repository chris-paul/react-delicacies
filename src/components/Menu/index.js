/*
 * @Author: 廉恒凯
 * @Date: 2019-12-29 16:38:11
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2020-04-11 21:07:30
 * @Description: file content
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Menu } from 'antd';
import { HomeOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { PropTypes } from 'prop-types';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKeys: ['/dashboard'],
            // 当前页面路径
            pathname: '',
        };
    }

    componentDidMount() {
        const {
            location: { pathname },
        } = this.props;
        this.setState({
            selectedKeys: [pathname],
            pathname,
        });
    }

    static getDerivedStateFromProps(props, state) {
        if (props.location.pathname !== state.pathname) {
            return {
                pathname: props.location.pathname,
                selectedKeys: [props.location.pathname],
            };
        }
        return state;
    }

    render() {
        const { selectedKeys } = this.state;
        const { history } = this.props;
        return (
            <Menu
                theme="light"
                mode="inline"
                defaultOpenKeys={['/dashboard']}
                selectedKeys={selectedKeys}
                onClick={({ key }) => {
                    history.push(key);
                    this.setState({ selectedKeys: [key] });
                }}
            >
                <Menu.Item key="/list">
                    <HomeOutlined />
                    <span>工作台</span>
                </Menu.Item>
                <Menu.Item key="/work">
                    <ShoppingCartOutlined />
                    <span>订单管理</span>
                </Menu.Item>
            </Menu>
        );
    }
}

Index.propTypes = {
    history: PropTypes.instanceOf(Object).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }),
};

Index.defaultProps = {
    location: {
        pathname: '',
    },
};
export default withRouter(Index);

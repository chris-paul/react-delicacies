/*
 * @Author: 廉恒凯
 * @Date: 2019-12-29 16:38:11
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-05-15 10:07:12
 * @Description: Menu
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Menu } from 'antd';
import { PropTypes } from 'prop-types';
import memuData from './constant';

class MenuNavigate extends Component {
    constructor(props) {
        super(props);
        this.defaultOpenKeys = ['/list'];
        this.state = {
            selectedKeys: this.defaultOpenKeys,
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
                defaultOpenKeys={this.defaultOpenKeys}
                selectedKeys={selectedKeys}
                onClick={({ key }) => {
                    history.push(key);
                    this.setState({ selectedKeys: [key] });
                }}
            >
                {memuData.map(item => {
                    const { link, name, menuIcon } = item;
                    return (
                        <Menu.Item key={link} icon={menuIcon}>
                            {name}
                        </Menu.Item>
                    );
                })}
            </Menu>
        );
    }
}

MenuNavigate.propTypes = {
    history: PropTypes.instanceOf(Object).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }),
};

MenuNavigate.defaultProps = {
    location: {
        pathname: '',
    },
};
export default withRouter(MenuNavigate);

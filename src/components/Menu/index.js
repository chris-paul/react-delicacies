/*
 * @Author: 廉恒凯
 * @Date: 2019-12-29 16:38:11
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2020-04-28 22:15:14
 * @Description: Menu
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Menu } from 'antd';
import { PropTypes } from 'prop-types';
import { memuData } from './constant';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKeys: ['/list'],
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

    renderMenuItem = () => {
        return (
            <>
                {memuData.map(item => {
                    const { link, name, menuIcon } = item;
                    return (
                        <Menu.Item key={link}>
                            {menuIcon()}
                            <span>{name}</span>
                        </Menu.Item>
                    );
                })}
            </>
        );
    };

    render() {
        const { selectedKeys } = this.state;
        const { history } = this.props;
        return (
            <Menu
                theme="light"
                mode="inline"
                defaultOpenKeys={['/list']}
                selectedKeys={selectedKeys}
                onClick={({ key }) => {
                    history.push(key);
                    this.setState({ selectedKeys: [key] });
                }}
            >
                {this.renderMenuItem()}
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

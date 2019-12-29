import React, { Component, Suspense } from 'react';
import { Switch, Redirect, Router } from 'react-router-dom';
import { Layout } from 'antd';
import { createHashHistory } from 'history';
import Menu from '@components/Menu';
import routeConfig from '../../router/routeConfig';
import styles from './index.less';

const { Content, Sider } = Layout;

const history = createHashHistory();

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Router history={history}>
                <Layout className={styles.layoutSlder}>
                    <Sider theme="light">
                        <Menu />
                    </Sider>
                    <Layout>
                        <Content>
                            <Suspense fallback={<div>Loading...</div>}>
                                <Switch>
                                    {routeConfig}
                                    <Redirect from="/*" to="/list" />
                                </Switch>
                            </Suspense>
                        </Content>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}

export default Home;

import React, { Component, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'antd';
import { createHashHistory } from 'history';
import { renderRoutes } from 'react-router-config';
import { hot } from 'react-hot-loader/root';
import Menu from '@components/Menu';
import routeConfig from '../../router/routeConfig';
import styles from './index.less';

const { Sider } = Layout;

const history = createHashHistory();

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <BrowserRouter history={history}>
                <Layout className={styles.layoutSlder}>
                    <Sider theme="light">
                        <Menu />
                    </Sider>
                    <Suspense fallback={<div>Loading...</div>}>
                        {renderRoutes(routeConfig)}
                    </Suspense>
                </Layout>
            </BrowserRouter>
        );
    }
}
export default hot(Home);

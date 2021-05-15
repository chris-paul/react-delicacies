/*
 * @Author: 廉恒凯
 * @Date: 2021-05-13 20:50:51
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-05-15 12:41:46
 * @Description: file content
 */
import React, { PureComponent, Suspense } from 'react';
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

class Home extends PureComponent {
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

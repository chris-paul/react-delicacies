/*
 * @Author: your name
 * @Date: 2019-12-27 15:43:40
 * @LastEditTime : 2019-12-28 13:39:42
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-delicacies\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AppContainer } from 'react-hot-loader';
import { RouterCom } from './router';
import store from './store';
import './index.less';

const render = async () => {
    const root = document.getElementById('root');
    // 这边checkcookie后就能拿到是否登录状态，以及登录以后的一些信息
    ReactDOM.render(
        <AppContainer>
            <ConfigProvider>
                <Provider store={store}>
                    <RouterCom />
                </Provider>
            </ConfigProvider>
        </AppContainer>,
        root,
    );
};

render();

/* 如果HMR冒泡到最顶层,那么就需要重新渲染app.js */
if (module.hot) {
    module.hot.accept('./router', () => {
        /* 因为在App里使用的是export default语法，这里使用的是require,默认不会加载default的，所以需要手动加上 */
        /* eslint-disable global-require */
        const NextApp = require('./router').default;
        /* eslint-disable global-require */
        render(NextApp);
    });
}

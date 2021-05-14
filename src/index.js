/*
 * @Author: 廉恒凯
 * @Date: 2019-12-27 15:43:40
 * @LastEditTime: 2020-09-13 21:24:42
 * @LastEditors: 廉恒凯
 * @Description: In User Settings Edit
 * @FilePath: \react-delicacies\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import locale from 'antd/es/locale/zh_CN';
import Home from './containers/Home';
import store from './store';
import './index.less';

dayjs.locale('zh-cn');

const App = () => (
    <ConfigProvider locale={locale}>
        <Provider store={store}>
            <Home />
        </Provider>
    </ConfigProvider>
);

const render = () => {
    const root = document.getElementById('root');
    ReactDOM.render(<App />, root);
};

render();

export default App;

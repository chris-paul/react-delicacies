/*
 * @Author: 廉恒凯
 * @Date: 2019-12-27 15:43:40
 * @LastEditTime: 2020-04-27 22:35:34
 * @LastEditors: 廉恒凯
 * @Description: In User Settings Edit
 * @FilePath: \react-delicacies\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import Home from './containers/Home';
import store from './store';
import './index.less';

moment.locale('zh-cn');

const App = () => (
    <ConfigProvider local={zhCN}>
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

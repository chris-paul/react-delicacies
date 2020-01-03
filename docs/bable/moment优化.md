<!--
 * @Author: your name
 * @Date: 2020-01-03 11:44:58
 * @LastEditTime : 2020-01-03 11:53:53
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-delicacies\docs\bable\moment优化.md
 -->
### moment 是一个很大的包，很多antd的时间组件需要依赖moment的转换,我们替换为dayjs

```javascript
/* 取消moment */
npm install antd-dayjs-webpack-plugin
npm install dayjs --save

/* 修改webpack配置 moment按需加载并且替换antd中的moment为dayjs */
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
plugins: [
    new webpack.ContextReplacementPlugin(/moment\/locale$/, /zh-cn/);
    new AntdDayjsWebpackPlugin();
]

/* 修改webpack别名,无缝替换 */
alias: {
    moment: 'dayjs',
}
/*  入口引入中文包 */
import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import JumpPage from 'logicComponents/jumpPage';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import store from './store';

const render = async () => {
    const root = document.getElementById('root');
    ReactDOM.render(
        <ConfigProvider locale={zh_CN}>
            <Provider store={store}>
                <JumpPage />
            </Provider>
        </ConfigProvider>,
        root,
    );
};
render();
```


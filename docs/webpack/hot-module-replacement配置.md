<!--
 * @Author: 廉恒凯
 * @Date: 2019-12-29 12:52:51
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2020-04-11 15:48:41
 * @Description: webpack 热更新
 -->

### HMR 的原理

-   假如 B 模块的代码被更改了，webpack 可以检测到，并且可以知道是哪个更改了

-   然后根据依赖图，发现 A 模块依赖于 B 模块，于是向上冒泡到 A 模块中，判断 A 模块里有没有处理热加载的代码

-   如果没有，则继续向上冒泡，直到冒泡到顶层，最后触发页面刷新（如果引用了多个 chunk，当一个冒泡到顶层并且没有被处理的话，整个页面都会触发刷新）

-   如果中途被捕获，那么将只重新加载冒泡路径上的模块，并触发对应 HMR 处理函数的回调函数

### hot-module-replacement

-   配置 react 的热更新插件,react-hot-loader/babel 会重写每一个组件的 HMR 代码

```javascript
{
    "presets": [
        ["es2015",{ "loose": true }],
        "react"
    ],
    "plugin": ["react-hot-loader/babel"]
}

```

-   配置需要热更替的代码

```javascript
/* 如果HMR冒泡到最顶层,那么就需要重新渲染app.js */
if (module.hot) {
    module.hot.accept('./App.jsx', () => {
        const NextApp = require('./App.jsx').default;
        ReactDOM.hydrate(<NextApp />, document.getElementById('root'));
    });
}
```

-   webpack 配置热更新的插件,每次 build 之后,server 进行热更新

```javascript
/* 打包的时候需要除了入口还必须把热更新模块的代码加进去, patch包是用来对react组件进行替换的 */
config.entry = {
    entry: ['react-hot-loader/patch', path.join(__dirname, '../client/app.js')],
};
/* webpack的服务器的相关信息 */
config.devServer = {
    host: '0.0.0.0',
    port: '8888',
    contentBase: path.join(__dirname, '../dist'),
    hot: true,
    overlay: {
        errors: true,
    },
    publicPath: '/public',
    historyApiFallback: {
        index: '/public/index.html',
    },
};

config.plugins.push(new webpack.HotModuleReplacementPlugin());
```

-   然后在代码的入口 entry 根节点包含热更新

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
/* 包裹根节点，想要渲染的内容 */
import { AppContainer } from 'react-hot-loader';
ReactDOM.hydrate(<App />, document.getElementById('root'));

const root = document.getElementById('root');
const render = Component => {
    ReactDOM.hydrate(
        <AppContainer>
            <Component />
        </AppContainer>,
        root,
    );
};

render(App);
/* 如果需要热更新的代码出现的时候,重新加载app.js */
if (module.hot) {
    module.hot.accept('./App.jsx', () => {
        /* 因为在App里使用的是export default语法，这里使用的是require,默认不会加载default的，所以需要手动加上 */
        const NextApp = require('./App.jsx').default;
        render(NextApp);
    });
}
```

### 参考链接

-   https://juejin.im/post/5a41ab5b51882560b65290eb

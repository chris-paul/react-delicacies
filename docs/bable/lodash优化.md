<!--
 * @Author: 廉恒凯
 * @Date: 2020-01-03 11:29:24
 * @LastEditTime: 2020-04-11 15:45:04
 * @LastEditors: 廉恒凯
 * @Description: lodash优化
 * @FilePath: \react-delicacies\docs\bable\lodash优化.md
 -->

### babel-loader & babel-plugin-lodash

-   可以使用 babel-loader 在对\*.js 文件进行解析，然后借助于 babel-plugin-lodash 插件对引用的 lodash 进行类似 tree shaking 的操作，这样就可以去除未使用的 lodash 代码片段

    ```javascript
    npm install @babel/preset-env babel-plugin-lodash --dev
    /* 配置.babelrc */
    {
        "plugins": ["lodash"],
        "presets": [
            [
                "@babel/env", {
                    "targets": {
                        "node": 6
                    }
                }
            ]
        ]
    }
    ```

-   根据 babel-plugin-lodash 参考文档介绍，使用 lodash-webpack-plugin 可以进一步压缩 lodash

    ```javascript
    npm install lodash-webpack-plugin --dev
    const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
    ...
    plugins: [
        new LodashModuleReplacementPlugin,
    ]
    ```

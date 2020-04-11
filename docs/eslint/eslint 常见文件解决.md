<!--
 * @Author: 廉恒凯
 * @Date: 2019-12-29 12:52:51
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2020-04-11 21:16:28
 * @Description: eslint常见报错总结
 -->

### eslint 不能识别路径

-   eslint 报错 Missing file extension for "“,基本所有的路径都不能识别

    ```javascript
    /* 之前的项目,使用这个处理别名,完全没有问题 */

    "import/resolver": {
        "alias": {
            "map": [
                ["components", "./src/components"]
            ]
        }
    },
    ```

-   解决方案

    npm install eslint-import-resolver-webpack

### js 文件引用 antd icons 报错

-   Type arguments can only be used in TypeScript files

*   这个问题其实归结于是 VSCode 使用 Flow 的 bug，在 VSCode 的 issue 里，开发者建议我们使用一个叫 Flow Language Support 的插件，使用后发现并没有解决，还会报 Flow 版本不匹配的错误，遂放弃，继续寻找到一个新的插件 vscode-flow-ide ,然后在 vscode 设置如下(https://juejin.im/post/5c91f3a55188252d77391cbb)

    ```
    "typescript.validate.enable": false,
    "javascript.validate.enable": false,
    ```

### jest 环境搭建

-   安装 enzyme 和 react16 的 adaper

    npm i --save-dev enzyme enzyme-adapter-react-16

-   这是一个库, 提供了很多判断 react 的适配器

    npm install jest-enzyme --save-dev

-   最新的 jsdom 环境

    npm install jest-environment-jsdom-fourteen --save-dev

-   babel-jest 识别 js 的高级语法

    npm install babel-jest --save-dev

-   facebook 的前端测试包

    npm install jest --save-dev

-   别名处理 将 css module 只转换为其名字

    npm install identity-obj-proxy --save-dev

-   进行一些新语法的支持

    npm install react-app-polyfill --save-dev

### 碰到的主要问题

-   提示无法找到 antd css,问题的关键在于本问题出现的原因关键在于使用了 babel-plugin-import 插件，我们可以通过 babel 的 env 配置项来决定何时启用 babel-plugin-import 插件,所以编写了 babel.config.js 增加测试环境。

-   jest 是急于 node 运行的, 把 babbel 指定 node 环境。

-   注意 webpack alias 在 jest 中的配置。

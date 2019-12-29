<!--
 * @Author: your name
 * @Date: 2019-11-30 16:25:45
 * @LastEditTime: 2019-11-30 17:16:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /jest-react/Jest/docs/jest配置讲解.md
 -->

### 配置生成

-   项目使用脚手架工具进行搭建,默认在 package.json 里面,或者移出到 jest.config.js 中, module.exports = (...配置项)

```javascript
 "jest": {
    "roots": [
        "<rootDir>/src"
    ],
    // 测试覆盖率是根据src下的什么文件生成的,但是除去ts的变量申明文件
    "collectCoverageFrom": [
      "src/**/*.{js,jsx,ts,tsx}",
      "!src/**/*.d.ts"
    ],
    // 在我们测试之前需要额外准备的东西,类似于热更新react-app-polyfill/jsdom,对代码进行一些修复等
    // 解决兼容性问题(比如创建的项目不兼容IE9等)
    "setupFiles": [
      "react-app-polyfill/jsdom"
    ],
    // 测试环境搭建好之后做一些额外的准备
    "setupFilesAfterEnv": [
        // 引入jest-enzyme
        "./node_modules/jest-enzyme/lib/index.js",
        //初始化Enzyme
        "<rootDir>/src/utils/testSetup"
    ],
    // 当我们运行npm run test的时候这些文件被认为是测试文件
    "testMatch": [
      "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
      "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"
    ],
    // 测试运行的环境(jest-environment-jsdom-fourteen),在node环境下去模拟浏览器的一些东西, 高版本的jsdom
    "testEnvironment": "jest-environment-jsdom-fourteen",
    // 对引入的文件等进行转义
    "transform": {
      // 对我们的jest文件使用babel-jest进行转义 这样就支持新的语法了
      "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
      // 如果我们的文件引入的css这样的文件 就使用cssTransform进行处理 也就是返回空对象,因为我们不会对对象测试
      "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
      // 如果引入的不是这些文件,那么除了svg返回一个react的组件,其他的只返回文件名
      "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
    },
    // 当引入node_modules下面的文件时候,不进行transform
    "transformIgnorePatterns": [
      "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
      // 针对css module的情况进行忽略
      "^.+\\.module\\.(css|sass|scss)$"
    ],
    // 当我们自动化测试的引入的模块默认到node_modules找, 如果里面没有我们希望到modulePaths里面找
    "modulePaths": [],
    // jest模块的对别名的处理
    "moduleNameMapper": {
     // 针对react-nativr的配置
      "^react-native$": "react-native-web",
      /* 如果我们引入的.module下面的css等文件的时候,css module 因为webpack对css module的处理对于我们是没有用的
      使用cssmodule 会对css进行转换例如 import styles from './module/index.css'
      .div {
          color: 'red'
      }
      转换后：
      {
          style_div_[hash] {
              color: 'red'
          }
      }
      identity-obj-proxy转换后
      {
        div: 'div'
      }
      */
      "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy"
    },
    // 引入的文件没有后缀的时候使用这些后缀去找
    "moduleFileExtensions": [
      "web.js",
      "js",
      "web.ts",
      "ts",
      "web.tsx",
      "tsx",
      "json",
      "web.jsx",
      "jsx",
      "node"
    ],
    // npm run test的时候 插件
    "watchPlugins": [
      "jest-watch-typeahead/filename",
      "jest-watch-typeahead/testname"
    ]
  },
```
